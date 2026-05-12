"use client";

import { useEffect, useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { runAudit } from "@/lib/auditEngine";
import { AuditResult, AuditInput, ApiUsage } from "@/types/audit";
import AuditResults from "@/components/audit/AuditResults";
import LeadCaptureCard from "@/components/audit/LeadCaptureCard";
import { Navbar } from "@/components/layout/Navbar";
import { Loader2 } from "lucide-react";

function ResultsContent() {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<AuditResult | null>(null);

  const teamSize = Number(searchParams.get("teamSize")) || 0;

  useEffect(() => {
    // Simulate analyzing state
    const timer = setTimeout(() => {
      const data: AuditInput = {
        teamSize,
        monthlySpend: Number(searchParams.get("monthlySpend")),
        toolsUsed: searchParams.get("toolsUsed")?.split(",").filter(Boolean) || [],
        apiUsage: (searchParams.get("apiUsage") as ApiUsage) || "low",
      };

      const auditResult = runAudit(data);
      setResult(auditResult);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchParams, teamSize]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-4">
        <Loader2 className="w-12 h-12 text-primary animate-spin" />
        <h2 className="text-2xl font-bold animate-pulse">Analyzing your stack...</h2>
        <p className="text-muted-foreground">Checking benchmarks and pricing models.</p>
      </div>
    );
  }

  return result ? (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 space-y-10">
      <AuditResults result={result} />
      <LeadCaptureCard teamSize={teamSize} />
    </div>
  ) : null;
}

export default function ResultsPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          <Suspense fallback={<div>Loading...</div>}>
            <ResultsContent />
          </Suspense>
        </div>
      </main>
    </div>
  );
}
