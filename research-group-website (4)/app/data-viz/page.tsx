"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, AlertCircle } from "lucide-react"

// Placeholder URL - replace with actual Shiny app URL when provided
const SHINY_APP_URL = "https://your-shiny-app.shinyapps.io/your-app-name/"

export default function DataVizPage() {
  const [iframeError, setIframeError] = useState(false)

  const handleIframeError = () => {
    setIframeError(true)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 text-foreground">Research Data & Visualizations</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
          Explore our interactive research dashboard powered by advanced data analytics and visualization tools
        </p>
      </div>

      {/* Shiny App Embed */}
      <Card className="retro-card mb-6">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <CardTitle className="text-xl font-semibold">Interactive Research Dashboard</CardTitle>
            <Button variant="outline" size="sm" asChild className="hover:pixel-shadow transition-all bg-transparent">
              <a href={SHINY_APP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="h-4 w-4" />
                Open in new tab
              </a>
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {!iframeError ? (
            <div className="responsive-iframe-container">
              <iframe
                src={SHINY_APP_URL}
                title="Research Data Dashboard"
                className="responsive-iframe"
                onError={handleIframeError}
                sandbox="allow-scripts allow-same-origin allow-forms"
                loading="lazy"
              />
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center p-12 text-center bg-muted/50 rounded-b-lg">
              <AlertCircle className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-lg font-semibold mb-2">Unable to load dashboard</h3>
              <p className="text-muted-foreground mb-4 max-w-md">
                The interactive dashboard could not be loaded. Please try opening it in a new tab.
              </p>
              <Button
                asChild
                className="pixel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
              >
                <a href={SHINY_APP_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Open Dashboard
                </a>
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="retro-card">
          <CardHeader>
            <CardTitle className="text-lg">About This Dashboard</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground text-pretty">
              Our interactive dashboard provides real-time access to research data, statistical analyses, and dynamic
              visualizations. Built with R Shiny, it offers an intuitive interface for exploring complex datasets and
              research findings.
            </p>
          </CardContent>
        </Card>

        <Card className="retro-card">
          <CardHeader>
            <CardTitle className="text-lg">Technical Requirements</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="text-muted-foreground space-y-2">
              <li>• Modern web browser with JavaScript enabled</li>
              <li>• Stable internet connection recommended</li>
              <li>• Desktop or tablet for optimal viewing experience</li>
              <li>• Mobile devices supported with responsive design</li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
