import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-6">
      <section className="max-w-3xl text-center space-y-6">
        <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm">
          AI Spend Optimization Platform
        </div>

        <h1 className="text-5xl font-bold tracking-tight">
          Stop Overpaying for AI Tools
        </h1>

        <p className="text-muted-foreground text-lg">
          StackWise audits your AI subscriptions and shows where startups can reduce unnecessary spend.
        </p>

        <Button size="lg">
          Start Free Audit
        </Button>
      </section>
    </main>
  )
}