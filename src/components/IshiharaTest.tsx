"use client";

import { useMemo, useState } from "react";
import type { Plate, UserAnswer } from "../lib/ishihara";
import {
  DefaultThresholds,
  computeDiagnosis,
  scorePlate,
} from "../lib/ishihara";
import { IshiharaPlate } from "./IshiharaPlate";
import { useRouter } from "next/navigation";
import { ChevronLeft, CheckCircle } from "lucide-react";

export function IshiharaTest({ plates }: { plates: Plate[] }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const current = plates[idx];
  const timeLimit =
    current.timeLimitSec ?? DefaultThresholds.defaultTimeLimitSec;

  const progress = useMemo(
    () => ((idx + 1) / plates.length) * 100,
    [idx, plates.length]
  );

  const onAnswer = ({
    value,
    latencyMs,
    timedOut,
  }: {
    value: string;
    latencyMs: number;
    timedOut?: boolean;
  }) => {
    const nextAnswers = answers.concat([
      { plateId: current.id, value, latencyMs, timedOut },
    ]);

    setAnswers(nextAnswers);

    if (idx + 1 < plates.length) {
      setIdx(idx + 1);
    } else {
      setIsSubmitting(true);

      const scores = nextAnswers.map((a) => {
        const p = plates.find((x) => x.id === a.plateId)!;
        return scorePlate(a.value, p, a.latencyMs, a.timedOut);
      });

      const result = computeDiagnosis(
        scores,
        plates,
        DefaultThresholds
      );

      if (typeof window !== "undefined") {
        sessionStorage.setItem(
          "ishihara_scores",
          JSON.stringify({ scores, result })
        );
      }

      setTimeout(() => {
        router.push("/results");
      }, 1500);
    }
  };

  if (isSubmitting) {
    return (
      <div className="min-h-[420px] rounded-[34px] border border-white/70 bg-white/90 backdrop-blur-xl shadow-xl flex flex-col items-center justify-center px-8 py-14 space-y-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-emerald-50" />

        <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-[#0F6FFF] to-[#12B981] flex items-center justify-center shadow-lg">
          <CheckCircle className="w-11 h-11 text-white animate-pulse" />
        </div>

        <div className="relative text-center space-y-3">
          <h2 className="text-3xl font-semibold text-slate-900 tracking-tight">
            Processing Results
          </h2>
          <p className="text-slate-600 text-[15px] leading-7 max-w-sm">
            Generating your personalized color vision report.
          </p>
        </div>

        <div className="relative w-60 h-2 rounded-full bg-white overflow-hidden shadow-inner">
          <div className="h-full w-full bg-gradient-to-r from-[#0F6FFF] via-[#06B6D4] to-[#12B981] animate-pulse" />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress Card */}
      <div className="rounded-[30px] border border-white/70 bg-white/90 backdrop-blur-xl p-6 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-white to-emerald-50" />

        <div className="relative flex items-center justify-between text-sm mb-3">
          <span className="text-slate-600 font-medium">
            Plate {idx + 1} of {plates.length}
          </span>

          <span className="font-semibold bg-gradient-to-r from-[#0F6FFF] to-[#12B981] bg-clip-text text-transparent">
            {progress.toFixed(0)}%
          </span>
        </div>

        <div className="relative w-full h-3 bg-slate-100 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full rounded-full bg-gradient-to-r from-[#0F6FFF] via-[#06B6D4] to-[#12B981] transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Plate */}
      <IshiharaPlate
        plate={current}
        onSubmit={onAnswer}
        timeLimitSec={timeLimit}
      />

      {/* Previous */}
      {idx > 0 && (
        <button
          onClick={() => setIdx(idx - 1)}
          className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium text-[#0F6FFF] bg-gradient-to-r from-blue-50 to-emerald-50 border border-blue-100 hover:shadow-md hover:scale-[1.02] transition-all"
        >
          <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
          Previous Plate
        </button>
      )}
    </div>
  );
}