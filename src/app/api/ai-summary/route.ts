import { NextRequest, NextResponse } from "next/server";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY! });

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { toolsUsed, estimatedMonthlyWaste, estimatedAnnualSavings, optimizationScore } = body;

        const prompt = `You are an AI infrastructure optimization consultant.

Analyze the following audit results and generate a short personalized summary for the user.

Include:
- Key overspending observations
- Potential optimization opportunities
- General recommendation tone
- Keep response under 100 words

Audit Data:
- Tools Used: ${toolsUsed.join(", ")}
- Estimated Monthly Waste: $${estimatedMonthlyWaste}
- Estimated Annual Savings: $${estimatedAnnualSavings}
- Optimization Score: ${optimizationScore}%`;

        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash",
            contents: prompt,
        });

        const summary = response.text ?? "Unable to generate summary.";

        return NextResponse.json({ success: true, summary });
    } catch (error) {
        console.error("Gemini API error:", error);
        return NextResponse.json(
            { success: false, error: "Failed to generate AI summary" },
            { status: 500 }
        );
    }
}
