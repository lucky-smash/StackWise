"use client";

import { useState } from "react";
import { AuditInput, ApiUsage, AuditResult } from "@/types/audit";
import { runAudit } from "@/lib/auditEngine";
import AuditResults from "./AuditResults";


import { useRouter } from "next/navigation";

export default function AuditForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<AuditInput>({
    teamSize: 0,
    monthlySpend: 0,
    toolsUsed: [],
    apiUsage: "low",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Encode data into URL search params
    const params = new URLSearchParams({
      teamSize: formData.teamSize.toString(),
      monthlySpend: formData.monthlySpend.toString(),
      toolsUsed: formData.toolsUsed.join(","),
      apiUsage: formData.apiUsage
    });

    router.push(`/results?${params.toString()}`);
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

    </div>
  );
}