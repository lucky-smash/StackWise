import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Navbar } from "@/components/layout/Navbar"

export default function Home() {
  return (
    <div className="relative">
      <Navbar />
      <main className="min-h-screen pt-32 bg-background text-foreground flex flex-col items-center px-6 overflow-hidden">
        {/* Hero Section */}
        <section className="max-w-4xl text-center space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            v1.0 is live • Start optimizing today
          </div>

          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight">
            Stop overpaying <br />
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              for AI tools.
            </span>
          </h1>

          <p className="text-muted-foreground text-xl max-w-2xl mx-auto">
            Get an instant, data-backed audit of your AI spend. No login required.
            100% free analysis for growing startups.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link href="/audit">
              <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
                Start Free Audit →
              </Button>
            </Link>
            <Button variant="ghost" size="lg" className="h-14 px-8 text-lg rounded-full">
              See Benchmarks
            </Button>
          </div>


        </section>
      </main>
    </div>
  )
}