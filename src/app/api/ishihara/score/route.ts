/* eslint-disable @typescript-eslint/no-explicit-any */

import { NextRequest, NextResponse } from "next/server";
import { DefaultThresholds, computeDiagnosis, scorePlate, type PlateScore } from "../../../../lib/ishihara";
import { ishihara24 } from "../../../../data/ishihara24";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const answers = body?.answers as { plateId: number; value: string; latencyMs: number; timedOut?: boolean }[];
    if (!answers?.length) return NextResponse.json({ error: "No answers provided" }, { status: 400 });

    const scores: PlateScore[] = answers.map((a) => {
      const p = ishihara24.find((x) => x.id === a.plateId);
      if (!p) throw new Error(`Unknown plate ${a.plateId}`);
      return scorePlate(a.value, p, a.latencyMs, a.timedOut);
    });

    const result = computeDiagnosis(scores, ishihara24, DefaultThresholds);
    return NextResponse.json({ scores, result });
  } catch (e: any) {
    return NextResponse.json({ error: e?.message || "Scoring failed" }, { status: 500 });
  }
}
