"use client";
import { IshiharaSummary } from "@/components/IshiharaSummary";
import { ishihara24 } from "@/data/ishihara24";
import { useEffect, useState } from "react";
import { ArrowLeft, Download } from "lucide-react";
import Link from "next/link";

export default function ResultsPage() {
  const [resultData, setResultData] = useState<any>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const data = sessionStorage.getItem("ishihara_scores");
      if (data) {
        setResultData(JSON.parse(data));
      }
    }
  }, []);

  if (!resultData) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">Loading results...</div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-blue-50 py-8">
      <div className="max-w-5xl mx-auto px-4 space-y-8">
        {/* Header */}
        <div className="flex items-center justify-between">
          <Link href="/ishihara" className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800">
            <ArrowLeft className="w-5 h-5" />
            Retake Test
          </Link>
          <button className="flex items-center gap-2 px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition">
            <Download className="w-4 h-4" />
            PDF Report
          </button>
        </div>

        <IshiharaSummary result={resultData.result} plates={ishihara24} />
      </div>
    </main>
  );
}