"use client";
import { useMemo, useState } from "react";
import type { Plate, UserAnswer } from "../lib/ishihara";
import { DefaultThresholds, computeDiagnosis, scorePlate } from "../lib/ishihara";
import { IshiharaPlate } from "./IshiharaPlate";
import { useRouter } from "next/navigation";
import { ChevronLeft, CheckCircle } from "lucide-react";

export function IshiharaTest({ plates }: { plates: Plate[] }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  const current = plates[idx];
  const timeLimit = current.timeLimitSec ?? DefaultThresholds.defaultTimeLimitSec;

  const progress = useMemo(() => ((idx + 1) / plates.length) * 100, [idx, plates.length]);

  const onAnswer = ({ value, latencyMs, timedOut }: { value: string; latencyMs: number; timedOut?: boolean }) => {
    const nextAnswers = answers.concat([{ plateId: current.id, value, latencyMs, timedOut }]);
    setAnswers(nextAnswers);

    if (idx + 1 < plates.length) {
      setIdx(idx + 1);
    } else {
      setIsSubmitting(true);
      
      const scores = nextAnswers.map((a) => {
        const p = plates.find((x) => x.id === a.plateId)!;
        return scorePlate(a.value, p, a.latencyMs, a.timedOut);
      });

      const result = computeDiagnosis(scores, plates, DefaultThresholds);
      
      if (typeof window !== 'undefined') {
        sessionStorage.setItem("ishihara_scores", JSON.stringify({ scores, result }));
      }
      
      setTimeout(() => {
        router.push("/results");
      }, 1500);
    }
  };

  if (isSubmitting) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
        <CheckCircle className="w-16 h-16 text-green-500 animate-bounce" />
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold text-gray-900">Processing Results</h2>
          <p className="text-gray-600">Generating your color vision report...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Progress Bar */}
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-4 border border-indigo-100 shadow-xl">
        <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
          <span>Plate {idx + 1} of {plates.length}</span>
          <span>{progress.toFixed(0)}% complete</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div 
            className="bg-gradient-to-r from-indigo-600 to-purple-600 h-2 rounded-full transition-all duration-500 shadow-inner"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Current Plate */}
      <IshiharaPlate plate={current} onSubmit={onAnswer} timeLimitSec={timeLimit} />

      {/* Navigation */}
      {idx > 0 && (
        <button
          onClick={() => setIdx(idx - 1)}
          className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 font-medium transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Previous Plate
        </button>
      )}
    </div>
  );
}