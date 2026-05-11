import { AuditResult } from "@/types/audit";
import { CheckCircle2, AlertCircle, TrendingDown } from "lucide-react";

type AuditResultsProps = {
    result: AuditResult;
};

export default function AuditResults({ result }: AuditResultsProps) {
    return (
        <div className="space-y-8">
            {/* Summary Card */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="col-span-1 md:col-span-2 bg-card border rounded-2xl p-8 flex flex-col justify-between shadow-sm">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Annual Savings Found</p>
                        <h2 className="text-6xl font-black text-primary mt-2">
                            ${result.estimatedAnnualSavings.toLocaleString()}
                        </h2>
                    </div>
                    <div className="mt-8 flex items-center gap-2 text-emerald-600 bg-emerald-50 w-fit px-3 py-1 rounded-full text-sm font-semibold">
                        <TrendingDown className="w-4 h-4" />
                        Possible Margin Reclaimed
                    </div>
                </div>

                <div className="bg-card border rounded-2xl p-8 flex flex-col justify-between shadow-sm">
                    <div>
                        <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Efficiency</p>
                        <div className="mt-4 flex items-center justify-between">
                            <span className="text-4xl font-bold">{result.optimizationScore}%</span>
                            <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-tighter ${result.optimizationScore > 80 ? "bg-emerald-100 text-emerald-700" : "bg-amber-100 text-amber-700"
                                }`}>
                                {result.optimizationScore > 80 ? "High" : "Low"}
                            </div>
                        </div>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full mt-4 overflow-hidden">
                        <div
                            className={`h-full transition-all duration-1000 ${result.optimizationScore > 80 ? "bg-emerald-500" : "bg-amber-500"
                                }`}
                            style={{ width: `${result.optimizationScore}%` }}
                        />
                    </div>
                </div>
            </div>

            {/* Insight Section */}
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-6 flex gap-4 items-start">
                <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <AlertCircle className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                    <p className="text-blue-900 font-medium">Stack Intelligence Insight</p>
                    <p className="text-blue-700 text-sm leading-relaxed">
                        "Your current configuration shows signs of tool overlap. By consolidating redundant subscriptions,
                        you can reclaim roughly ${(result.estimatedMonthlyWaste * 12).toLocaleString()} in annual margin."
                    </p>
                </div>
            </div>

            {/* Detailed Recommendations */}
            <div className="space-y-4">
                <h3 className="text-xl font-bold px-2">Actionable Recommendations</h3>
                <div className="grid gap-3">
                    {result.recommendations.map((rec, index) => (
                        <div key={index} className="flex items-center gap-4 p-4 bg-card border rounded-xl hover:border-primary/50 transition-colors group">
                            <div className="bg-muted group-hover:bg-primary/10 p-2 rounded-lg transition-colors">
                                <CheckCircle2 className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            </div>
                            <p className="font-medium text-sm md:text-base">{rec}</p>
                        </div>
                    ))}
                    {result.recommendations.length === 0 && (
                        <div className="text-center py-12 border border-dashed rounded-2xl">
                            <p className="text-muted-foreground">No critical waste detected. Your stack is highly optimized!</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}