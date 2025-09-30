"use client";

import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

// Define types for your stored session data
interface HueScores {
  boxes: unknown[];
  userData: { gender: string; age: string };
  totalScore: number;
  perZoneScores: number[];
}

interface IshiharaResult {
  scores: unknown[];
  result: {
    type: string;
    severity: string;
    [key: string]: unknown;
  };
}

interface CombinedData {
  ishihara: IshiharaResult | null;
  hue: HueScores | null;
}

export default function FinalResultsPage() {
  const [analysis, setAnalysis] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [localData, setLocalData] = useState<CombinedData | null>(null);

  useEffect(() => {
    const ishiharaRaw = sessionStorage.getItem("ishihara_scores");
    const hueRaw = sessionStorage.getItem("hue_scores");

    const combined: CombinedData = {
      ishihara: ishiharaRaw ? JSON.parse(ishiharaRaw) : null,
      hue: hueRaw ? JSON.parse(hueRaw) : null,
    };

    setLocalData(combined);
  }, []);

  async function runCombinedAnalysis() {
    if (!localData) return;

    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const res = await fetch("/api/analyze-combined", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ results: localData }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "AI analysis failed");

      setAnalysis(data.analysis); // Keep it as raw Markdown
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Unknown error occurred");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="max-w-4xl mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-bold text-center">Final Combined Analysis</h1>

      <div className="text-center">
        <button
          onClick={runCombinedAnalysis}
          disabled={loading}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {loading ? "Analyzing..." : "Run Combined AI Analysis"}
        </button>
      </div>

      {error && <p className="text-red-600 text-center">{error}</p>}

      {analysis && (
        <div className="bg-white p-6 rounded-lg shadow prose prose-sm max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {analysis}
          </ReactMarkdown>
        </div>
      )}

      {!analysis && !loading && (
        <p className="text-gray-500 text-center text-sm">
          Run the analysis to view your combined Ishihara + Hue Test report.
        </p>
      )}
    </main>
  );
}