"use client";
import { useMemo, useState } from "react";
import type { Plate, UserAnswer } from "../lib/ishihara";
import { DefaultThresholds, computeDiagnosis, scorePlate } from "../lib/ishihara";
import { IshiharaPlate } from "./IshiharaPlate";
import { useRouter } from "next/navigation";

export function IshiharaTest({ plates }: { plates: Plate[] }) {
  const [idx, setIdx] = useState(0);
  const [answers, setAnswers] = useState<UserAnswer[]>([]);
  const router = useRouter();

  const current = plates[idx];
  const timeLimit = current.timeLimitSec ?? DefaultThresholds.defaultTimeLimitSec;

  const onAnswer = ({ value, latencyMs, timedOut }: { value: string; latencyMs: number; timedOut?: boolean }) => {
    const nextAnswers = answers.concat([{ plateId: current.id, value, latencyMs, timedOut }]);
    setAnswers(nextAnswers);

    if (idx + 1 < plates.length) {
      setIdx(idx + 1);
    } else {
      const scores = nextAnswers.map((a) => {
        const p = plates.find((x) => x.id === a.plateId)!;
        return scorePlate(a.value, p, a.latencyMs, a.timedOut);
      });

      const result = computeDiagnosis(scores, plates, DefaultThresholds);
      if (typeof window !== 'undefined') {
        sessionStorage.setItem("ishihara_scores", JSON.stringify({ scores, result }));
      }
      router.push("/ishihara/results");
    }
  };

  const progress = useMemo(() => ((idx + 1) / plates.length) * 100, [idx, plates.length]);

  return (
    <div className="space-y-6">
      <div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
        <div className="bg-gray-800 h-3" style={{ width: `${progress}%` }} />
      </div>
      <IshiharaPlate plate={current} onSubmit={onAnswer} timeLimitSec={timeLimit} />
      <div className="text-center text-xs opacity-70">Ambient daylight (D65-ish) and ~75cm viewing distance recommended.</div>
    </div>
  );
}
