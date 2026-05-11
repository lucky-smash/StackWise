import { AuditInput, AuditResult } from "@/types/audit";
import { TOOL_PRICING } from "@/data/toolPricing";

export function runAudit(data: AuditInput): AuditResult {
    let recommendations: string[] = [];
    let waste = 0;
    let score = 100;
    let chatbotTools = data.toolsUsed.filter((tool) => TOOL_PRICING[tool as keyof typeof TOOL_PRICING]?.category === "chatbot");
    let codingTools = data.toolsUsed.filter((tool) => TOOL_PRICING[tool as keyof typeof TOOL_PRICING]?.category === "coding");

    if (chatbotTools.length > 1) {
        recommendations.push("Claude and ChatGPT overlap in functionality.Consider standardizing on one primary assistant.");
        score -= 10;
        waste += (chatbotTools.length - 1) * 20;
    }
    if (codingTools.length > 1) {
        recommendations.push("Cursor and GitHub Copilot overlap in functionality.Consider standardizing on one primary assistant.");
        score -= 10;
        waste += (codingTools.length - 1) * 10;
    }
    return {
        optimizationScore: score,
        estimatedMonthlyWaste: waste,
        estimatedAnnualSavings: waste * 12,
        recommendations,
    };
}