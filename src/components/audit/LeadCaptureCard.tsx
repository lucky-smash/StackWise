"use client";

import { useState } from "react";
import { CheckCircle2, Building2, Mail, UserCircle, Users, ArrowRight } from "lucide-react";

type LeadCaptureCardProps = {
  teamSize?: number;
};

export default function LeadCaptureCard({ teamSize }: LeadCaptureCardProps) {
  const [formData, setFormData] = useState({
    companyName: "",
    companyEmail: "",
    role: "",
    teamSize: teamSize ?? 0,
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          companyName: formData.companyName,
          companyEmail: formData.companyEmail,
          role: formData.role,
          teamSize: formData.teamSize,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border bg-card p-10 text-center shadow-sm">
        <div className="flex flex-col items-center gap-3">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
            <CheckCircle2 className="h-7 w-7 text-emerald-600" />
          </div>
          <h3 className="text-xl font-bold">You&apos;re on the list!</h3>
          <p className="max-w-sm text-sm text-muted-foreground">
            We&apos;ll reach out shortly with your personalized savings roadmap and consultation details.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-2xl border bg-card shadow-sm overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2">
        {/* Left — Value Proposition */}
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <h3 className="text-2xl md:text-[1.7rem] font-bold leading-tight tracking-tight">
            Generate your<br />Roadmap
          </h3>
          <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
            Complete your profile to unlock a 30-day execution roadmap and book a strategy consultation.
          </p>

          <ul className="mt-6 space-y-3">
            <li className="flex items-center gap-2.5 text-sm font-medium">
              <CheckCircle2 className="h-[18px] w-[18px] text-emerald-500 shrink-0" />
              Detailed 30-day migration timeline
            </li>
            <li className="flex items-center gap-2.5 text-sm font-medium">
              <CheckCircle2 className="h-[18px] w-[18px] text-emerald-500 shrink-0" />
              AI Executive Buy-in Kit
            </li>
          </ul>
        </div>

        {/* Right — Form */}
        <div className="p-8 md:p-10 border-t md:border-t-0 md:border-l flex flex-col justify-center">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Company Name & Work Email — row on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lead-company-name"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Company Name
                </label>
                <div className="group relative">
                  <Building2 className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within:text-primary" />
                  <input
                    type="text"
                    id="lead-company-name"
                    required
                    placeholder="Acme Inc"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    className="w-full rounded-lg border bg-background py-2.5 pl-10 pr-3 text-sm placeholder:text-muted-foreground/40 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lead-company-email"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Work Email
                </label>
                <div className="group relative">
                  <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within:text-primary" />
                  <input
                    type="email"
                    id="lead-company-email"
                    required
                    placeholder="alex@acme.com"
                    value={formData.companyEmail}
                    onChange={(e) => setFormData({ ...formData, companyEmail: e.target.value })}
                    className="w-full rounded-lg border bg-background py-2.5 pl-10 pr-3 text-sm placeholder:text-muted-foreground/40 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>
            </div>

            {/* Role & Team Size — row on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="lead-role"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Your Role
                </label>
                <div className="group relative">
                  <UserCircle className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within:text-primary" />
                  <input
                    type="text"
                    id="lead-role"
                    required
                    placeholder="CTO, VP of Engineering…"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-lg border bg-background py-2.5 pl-10 pr-3 text-sm placeholder:text-muted-foreground/40 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="lead-team-size"
                  className="mb-1.5 block text-[11px] font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  Team Size
                </label>
                <div className="group relative">
                  <Users className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50 transition-colors group-focus-within:text-primary" />
                  <input
                    type="number"
                    id="lead-team-size"
                    required
                    min={1}
                    placeholder="10"
                    value={formData.teamSize || ""}
                    onChange={(e) => setFormData({ ...formData, teamSize: Number(e.target.value) })}
                    className="w-full rounded-lg border bg-background py-2.5 pl-10 pr-3 text-sm placeholder:text-muted-foreground/40 transition-all focus:border-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/10"
                  />
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              type="submit"
              disabled={status === "submitting"}
              className="group flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === "submitting" ? (
                <>
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-primary-foreground/30 border-t-primary-foreground" />
                  Sending...
                </>
              ) : (
                <>
                  Unlock My Roadmap
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </>
              )}
            </button>

            {status === "error" && (
              <p className="text-center text-xs text-destructive">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
