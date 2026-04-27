"use client";

import { IshiharaSummary } from "@/components/IshiharaSummary";
import { ishihara24 } from "@/data/ishihara24";
import { ScoredResult } from "@/types/ScoredResult"
import { useEffect, useState } from "react";
import {
  ArrowLeft,
  Download,
  FileText,
} from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
  const [resultData, setResultData] =
    useState<{ result: ScoredResult } | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const data =
        sessionStorage.getItem("ishihara_scores");

      if (data) {
        setResultData(JSON.parse(data));
      }
    }
  }, []);

  if (!resultData) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 flex items-center justify-center px-6">
        <div className="rounded-3xl bg-white border border-slate-200 shadow-xl px-10 py-10 text-center">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#0F6FFF] to-[#12B981] mx-auto mb-5 animate-pulse" />

          <h2 className="text-2xl font-semibold text-slate-900 mb-2">
            Loading Results
          </h2>

          <p className="text-slate-500">
            Preparing your report...
          </p>
        </div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-slate-100 py-10">
      <div className="max-w-6xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="rounded-[30px] bg-white border border-slate-200 shadow-xl px-6 py-5">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            {/* Left */}
            <div>
              <p className="text-sm font-medium text-blue-600 mb-1">
                Ishihara Analysis
              </p>

              <h1 className="text-3xl font-semibold text-slate-900 tracking-tight">
                Color Vision Report
              </h1>

              <p className="text-slate-500 mt-1">
                Personalized screening summary
                based on your responses.
              </p>
            </div>

            {/* Right Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                href="/ishihara"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border border-slate-200 bg-white text-slate-700 font-medium hover:shadow-md transition"
              >
                <ArrowLeft className="w-4 h-4" />
                Retake Test
              </Link>

              <button className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white font-semibold bg-gradient-to-r from-[#0F6FFF] via-[#06B6D4] to-[#12B981] hover:shadow-xl transition-all">
                <Download className="w-4 h-4" />
                PDF Report
              </button>
            </div>
          </div>
        </div>

        {/* Summary Intro */}
        <div className="rounded-[28px] bg-white border border-slate-200 shadow-lg px-6 py-5 flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#0F6FFF] to-[#12B981] flex items-center justify-center shrink-0">
            <FileText className="w-5 h-5 text-white" />
          </div>

          <div>
            <h2 className="text-lg font-semibold text-slate-900 mb-1">
              Assessment Summary
            </h2>

            <p className="text-slate-600 leading-7">
              This report provides an educational
              screening interpretation of your
              Ishihara plate responses. It is not a
              formal medical diagnosis.
            </p>
          </div>
        </div>

        {/* Actual Summary Component */}
        <div className="rounded-[30px] bg-white border border-slate-200 shadow-xl p-6">
          <IshiharaSummary
            result={resultData.result}
            plates={ishihara24}
          />
        </div>
      </div>
    </main>
  );
}