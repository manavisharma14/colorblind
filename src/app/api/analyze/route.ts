import { NextResponse } from "next/server";
import { geminiModel } from "../../../lib/gemini";

export async function POST(req: Request) {
  const body = await req.json();

  // body.results = your Ishihara test results (perPlate, summary etc.)
  const prompt = `
  You are a medical screening assistant. Analyze these Ishihara test results.

  Data:
  ${JSON.stringify(body.results, null, 2)}

  Provide:
  1. Screening accuracy summary.
  2. Whether patterns suggest protanopia, deuteranopia, or normal vision.
  3. Severity estimate if possible.
  4. Any notes about limitations (not a diagnosis, only screening).
  `;

  const result = await geminiModel.generateContent(prompt);

  return NextResponse.json({
    analysis: result.response.text(),
  });
}