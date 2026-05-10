"use client";

import { useState } from "react";
import { AuditInput, ApiUsage, AuditResult } from "@/types/audit";
import { runAudit } from "@/lib/auditEngine";
import AuditResults from "./AuditResults";


export default function AuditForm() {
  const [formData, setFormData] = useState<AuditInput>({
    teamSize: 0,
    monthlySpend: 0,
    toolsUsed: [],
    apiUsage: "low",
  });

  const [result, setResult] = useState<AuditResult | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const auditResult = runAudit(formData);
    setResult(auditResult);
    console.log(auditResult);
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold">Audit Form</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mt-4">
        <div className="space-y-2">
          <label htmlFor="teamSize" className="text-sm font-medium">
            Team Size
          </label>
          <input
            type="number"
            id="teamSize"
            value={formData.teamSize}
            onChange={(e) =>
              setFormData({ ...formData, teamSize: Number(e.target.value) })
            }
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="monthlySpend" className="text-sm font-medium">
            Monthly Spend ($)
          </label>
          <input
            type="number"
            id="monthlySpend"
            value={formData.monthlySpend}
            onChange={(e) =>
              setFormData({ ...formData, monthlySpend: Number(e.target.value) })
            }
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="toolsUsed" className="text-sm font-medium">
            Tools Used (comma separated)
          </label>
          <input
            type="text"
            id="toolsUsed"
            value={formData.toolsUsed.join(", ")}
            onChange={(e) =>
              setFormData({
                ...formData,
                toolsUsed: e.target.value.split(",").map((tool) => tool.trim()),
              })
            }
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="apiUsage" className="text-sm font-medium">
            API Usage
          </label>
          <select
            id="apiUsage"
            value={formData.apiUsage}
            onChange={(e) =>
              setFormData({ ...formData, apiUsage: e.target.value as ApiUsage })
            }
            className="w-full px-3 py-2 border rounded-md"
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-primary-foreground py-2 rounded-md"
        >
          Calculate Savings
        </button>
      </form>

      {/* {result && (
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
      )} */}

      {result && <AuditResults result={result} />}

    </div>
  );
}