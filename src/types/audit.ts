export type ApiUsage = "low" | "medium" | "high";

export interface AuditInput {
  teamSize: number;
  monthlySpend: number;
  toolsUsed: string[];
  apiUsage: ApiUsage;
}

export interface AuditResult {
  optimizationScore: number;
  estimatedMonthlyWaste: number;
  estimatedAnnualSavings: number;
  recommendations: string[];
}