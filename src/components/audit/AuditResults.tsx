import { AuditResult } from "@/types/audit";

type AuditResultsProps = {
    result: AuditResult;
};

export default function AuditResults({
    result,
}: AuditResultsProps) {
    return (
        <div className="mt-6 border rounded-xl p-6 bg-card">
            <h2 className="text-2xl font-bold mb-4">
                Audit Results
            </h2>

            <div className="space-y-2">
                <p>
                    Optimization Score: {result.optimizationScore}
                </p>

                <p>
                    Estimated Monthly Waste: $
                    {result.estimatedMonthlyWaste}
                </p>

                <p>
                    Estimated Annual Savings: $
                    {result.estimatedAnnualSavings}
                </p>
            </div>

            <div className="mt-4">
                <h3 className="font-semibold mb-2">
                    Recommendations
                </h3>

                <ul className="list-disc ml-5 space-y-1">
                    {result.recommendations.map((rec, index) => (
                        <li key={index}>{rec}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}