// src/app/ishihara/results/page.tsx
"use client";

import { useEffect, useState } from "react";
import type { Plate, PlateScore, ScoredResult } from "@/lib/ishihara";
import { ishihara24 } from "@/data/ishihara24";
import { IshiharaSummary } from "@/components/IshiharaSummary";
import { useRouter } from "next/navigation";

export default function ResultsPage() {
  const [scores, setScores] = useState<PlateScore[] | null>(null);
  const [result, setResult] = useState<ScoredResult | null>(null);
  const router = useRouter();

  useEffect(() => {
    const raw = sessionStorage.getItem("ishihara_scores");
    if (!raw) return;

    try {
      const parsed = JSON.parse(raw);
      setScores(parsed.scores);
      setResult(parsed.result);
    } catch (e) {
      console.error("Failed to parse Ishihara scores:", e);
    }
  }, []);

  if (!scores || !result) {
    return (
      <main className="max-w-3xl mx-auto p-4 md:p-8">
        <p>Missing results. Please run the test again.</p>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto p-4 md:p-8 space-y-6">
      <h1 className="text-3xl font-bold">Ishihara Results</h1>

      {/* Summary and per-plate table */}
      <IshiharaSummary result={result} plates={ishihara24 as Plate[]} />

      {/* 🔹 Button to go to Final Results */}
      <div className="text-center">
        <button
          onClick={() => router.push("/final-results")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          View Combined Analysis →
        </button>
      </div>
    </main>
  );
}