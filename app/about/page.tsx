import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Users } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-foreground">About Disrupted Development</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
          Learn more about our research study, team, and how to connect with us
        </p>
      </div>

      {/* Group Description */}
      <section className="mb-12">
        <Card className="retro-card">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center">Our Research Study</CardTitle>
          </CardHeader>
          <CardContent className="prose prose-lg max-w-none">
            <p className="text-muted-foreground text-pretty leading-relaxed mb-4">
              The Disrupted Development research study will document the long-term effects of the termination of USAID
              and the reduction of global development financing on the education, health, and humanitarian sectors
              through a global survey of affected organizations and countries as well as in-depth case study research in
              select locations.
            </p>
            <p className="text-muted-foreground text-pretty leading-relaxed">
              The study seeks to identify both positive and negative shifts in how sectors function across multiple
              contexts in order to inform development financing, international philanthropy, and international
              (non-governmental) organizations. By leveraging this unique, large-scale, indiscriminate disruption to
              development financing, the study will make a substantial contribution to debates about 'what works' in
              international development—especially debates about local empowerment and truly sustainable development.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Research Team */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Research Team</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-foreground flex items-center gap-2">
            <Users className="h-5 w-5 text-primary" />
            Co-Principal Investigators
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="text-lg">Dr Daniel Shephard</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">University of Edinburgh</p>
              </CardContent>
            </Card>

            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="text-lg">Prof Paul Montgomery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">University of Birmingham</p>
              </CardContent>
            </Card>

            <Card className="retro-card">
              <CardHeader>
                <CardTitle className="text-lg">Prof David Rutkowski</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Indiana University at Bloomington</p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4 text-foreground">Research Assistant</h3>
          <Card className="retro-card max-w-md">
            <CardHeader>
              <CardTitle className="text-base">Guilherme Paiva Pinto</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground text-sm">PhD Candidate, Indiana University at Bloomington</p>
            </CardContent>
          </Card>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Global Advisory Group</h3>
          <Card className="retro-card">
            <CardContent className="pt-6">
              <p className="text-muted-foreground text-pretty leading-relaxed mb-4">
                Our global advisory group includes experts and stakeholders from leading institutions:
              </p>
              <div className="grid md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div>• Columbia University</div>
                <div>• Inter-Agency Network for Education in Emergencies</div>
                <div>• Innovations for Poverty Action</div>
                <div>• Kumasi Technical University</div>
                <div>• Save the Children</div>
                <div>• University of Oxford</div>
                <div>• Emory University</div>
                <div>• UN OCHA</div>
                <div>• Global Mental Health Action Network</div>
                <div>• ICVA</div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Logos and Branding */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Our Affiliation</h2>
        <Card className="retro-card text-center max-w-2xl mx-auto">
          <CardHeader>
            <a
              href="http://tobiasdevelopment.indiana.edu/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-auto mb-4 block hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/iu-trident-logo.png"
                alt="Indiana University"
                width={96}
                height={120}
                className="h-24 w-auto mx-auto"
              />
            </a>
            <CardTitle>Tobias Center for Innovation in International Development</CardTitle>
          </CardHeader>
        </Card>
      </section>

      {/* Contact Section */}
      <section>
        <h2 className="text-2xl font-bold text-center mb-8 text-foreground">Get In Touch</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <Card className="retro-card">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Email</p>
                  <a href="mailto:d.shephard@ed.ac.uk" className="text-primary hover:text-secondary transition-colors">
                    d.shephard@ed.ac.uk
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">Address</p>
                  <p className="text-muted-foreground">
                    Tobias Center for Innovation in International Development
                    <br />
                    Indiana University at Bloomington
                    <br />
                    Bloomington, Indiana
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="retro-card">
            <CardHeader>
              <CardTitle>Connect With Us</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground text-pretty">
                Interested in our research? Want to collaborate or learn more about the Disrupted Development study?
                We'd love to hear from you.
              </p>

              <div className="space-y-3">
                <Button
                  asChild
                  className="w-full pixel-shadow hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
                >
                  <a href="mailto:d.shephard@ed.ac.uk">
                    <Mail className="h-4 w-4 mr-2" />
                    Send us an email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
