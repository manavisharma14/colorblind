"use client";

import { useEffect, useState } from "react";
import type { Plate, PlateScore, ScoredResult } from "../../../lib/ishihara";
import { ishihara24 } from "../../../data/ishihara24";
import { IshiharaSummary } from "../../../components/IshiharaSummary";

export default function ResultsPage() {
  const [scores, setScores] = useState<PlateScore[] | null>(null);
  const [result, setResult] = useState<ScoredResult | null>(null);
  const [ai, setAi] = useState<string>("");
  const [loadingAi, setLoadingAi] = useState(false);
  const [aiError, setAiError] = useState<string>("");

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

  async function analyzeWithGemini() {
    if (!result || !scores) return;
    setLoadingAi(true);
    setAiError("");
    setAi("");

    try {
      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          results: {
            ...result,
            perPlate: scores,
          },
        }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "AI analysis failed");
      setAi(data.analysis);
    } catch (err: unknown) {
      if (err instanceof Error) {
        setAiError(err.message);
      } else {
        setAiError("AI analysis failed");
      }
    } finally {
      setLoadingAi(false);
    }
  }

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

      {/* AI analysis section */}
      <div className="rounded-2xl border p-4 shadow space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">AI Analysis (Gemini)</h2>
          <button
            onClick={analyzeWithGemini}
            disabled={loadingAi}
            className="rounded-2xl bg-blue-600 text-white px-4 py-2 disabled:opacity-60"
          >
            {loadingAi ? "Analyzing…" : "Analyze with Gemini"}
          </button>
        </div>

        {aiError && <p className="text-sm text-red-600">{aiError}</p>}

        {ai && (
          <div className="bg-gray-50 rounded-xl p-3 whitespace-pre-wrap text-sm">
            {ai}
          </div>
        )}

        {!ai && !loadingAi && (
          <p className="text-xs opacity-70">
            Note: Ishihara is a screening tool, not a diagnosis. AI analysis is informational only.
          </p>
        )}
      </div>
    </main>
  );
}