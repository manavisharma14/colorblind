import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
  try {
    // Try parsing body safely
    let results = {};
    try {
      const body = await req.json();
      results = body?.results || {};
    } catch {
      results = {};
    }

    const prompt = `
You are a vision science assistant. Analyze the following combined Ishihara and Hue Test results:

${JSON.stringify(results, null, 2)}

Please return a structured report with these sections:

1. Diagnosis Type & Severity  
   - Identify if the user has Deuteranopia, Protanopia, Tritanopia, or Normal Vision.  
   - Specify severity (mild, moderate, severe).  

2. Color IQ Score  
   - A numerical score (0–200) quantifying ability to distinguish subtle hue differences.  
   - Lower Hue Test error → higher Color IQ.  

3. Zone-Specific Weakness Insights  
   - Analyze Hue Test zone scores (reds/browns, yellows/greens, blues/greens, purples/blues).  
   - Identify which zones cause most confusion.  

4. Color Resilience Index (0–100)  
   - Proprietary index that fuses Ishihara diagnostic outcome + Hue performance.  
   - Higher means user compensates well despite deficiencies.  
   - Base this on: Ishihara accuracy + Hue total score.  

Output clearly with headings, bullet points, and numerical values where possible.
`;

    const completion = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        { role: "system", content: "You are a color vision testing assistant." },
        { role: "user", content: prompt },
      ],
    });

    return NextResponse.json({
      analysis: completion.choices[0].message.content,
    });
  } catch (err: unknown) {
    // ✅ Safe error handling
    if (err instanceof Error) {
      console.error("Error in /api/analyze-combined:", err.message);
      return NextResponse.json({ error: err.message }, { status: 500 });
    }
    console.error("Unknown error in /api/analyze-combined:", err);
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}