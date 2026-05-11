import AuditForm from "@/components/audit/AuditForm";
import { Navbar } from "@/components/layout/Navbar";

export default function AuditPage() {
  return (
    <div className="min-h-screen bg-muted/30">
      <Navbar />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-bold tracking-tight">Configure your stack</h1>
            <p className="text-muted-foreground text-lg">Enter your details below to see where you can save.</p>
          </div>
          <AuditForm />
        </div>
      </main>
    </div>
  );
}
