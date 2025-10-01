import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

const highlights = [
  { label: "Advisory Members", value: "10+", icon: "🌍" },
  { label: "Partner Institutions", value: "12+", icon: "🏛️" },
]

export default function HomePage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <div className="bg-primary text-white p-8 rounded-lg mb-8">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-balance">Disrupted Development</h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto text-pretty">
            Documenting the long-term effects of USAID termination and the reduction of global development financing on
            education, health, and humanitarian sectors
          </p>
        </div>
      </section>

      {/* Highlights Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-foreground">Research Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {highlights.map((highlight, index) => (
            <Card key={index} className="retro-card text-center hover:pixel-shadow transition-all duration-200">
              <CardHeader className="pb-2">
                <div className="text-3xl mb-2">{highlight.icon}</div>
                <CardTitle className="text-2xl font-bold text-primary">{highlight.value}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground font-medium">{highlight.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <div className="retro-card p-8 max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-foreground">Explore Our Research Data</h2>
          <p className="text-muted-foreground mb-6 text-pretty">
            Access our interactive dashboard to explore findings from our global survey and case study research
          </p>
          <Button
            asChild
            size="lg"
            className="pixel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            <Link href="/data-viz">View Dashboard</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
