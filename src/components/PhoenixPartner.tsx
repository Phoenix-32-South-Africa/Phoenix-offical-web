import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Award, Target, ArrowRight, CheckCircle } from "lucide-react";

const partners = [
  { name: "PLP", type: "Past Partner", logo: "PLP" },
  { name: "Seda", type: "Past Partner", logo: "SEDA" },
  { name: "Microsoft", type: "Target Partner", logo: "MS" },
  { name: "AWS", type: "Target Partner", logo: "AWS" }
];

const partnershipBenefits = [
  "Long-term ecosystem development",
  "Measurable social impact",
  "Joint technology initiatives",
  "Skills development programs"
];

export const PhoenixPartner = () => {
  return (
    <section className="py-24 bg-gradient-primary relative">
      {/* Geometric Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute border border-phoenix-red"
              style={{
                width: `${Math.random() * 200 + 50}px`,
                height: `${Math.random() * 200 + 50}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 360}deg)`,
                animation: `cyber-float ${3 + Math.random() * 2}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Build the <span className="text-phoenix-red">Ecosystem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We partner with organizations that care about long-term change, not PR headlines.
          </p>
        </div>

        {/* Partnership Philosophy */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-card/80 backdrop-blur-sm border-phoenix-red/30 hover:border-phoenix-red/50 transition-all duration-300">
            <CardContent className="p-8 text-center">
              <Target className="w-12 h-12 text-phoenix-red mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Our Partnership Approach</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We're not interested in surface-level collaborations. We want partners who share our vision 
                of building sustainable digital infrastructure for African businesses.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                {partnershipBenefits.map((benefit, index) => (
                  <div key={benefit} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-phoenix-red flex-shrink-0" />
                    <span className="text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {partners.map((partner, index) => (
            <Card 
              key={partner.name}
              className={`group bg-card/50 backdrop-blur-sm border-phoenix-red/20 hover:border-phoenix-red/60 transition-all duration-300 hover:shadow-cyber hover:-translate-y-2 ${partner.type === 'Target Partner' ? 'opacity-75' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-phoenix-red/10 rounded-full flex items-center justify-center group-hover:bg-phoenix-red/20 transition-colors duration-300 mb-4">
                    <span className="text-phoenix-red font-bold text-sm">{partner.logo}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{partner.name}</h3>
                  <p className={`text-sm font-medium ${partner.type === 'Past Partner' ? 'text-phoenix-red' : 'text-muted-foreground'}`}>
                    {partner.type}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Partnership Types */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-card/50 backdrop-blur-sm border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Building2 className="w-12 h-12 text-phoenix-red mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Corporate Partners</h3>
              <p className="text-muted-foreground">
                Technology companies looking to make meaningful impact in African markets.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Award className="w-12 h-12 text-phoenix-red mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Development Organizations</h3>
              <p className="text-muted-foreground">
                NGOs and government agencies focused on economic development and skills training.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur-sm border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
            <CardContent className="p-6 text-center">
              <Target className="w-12 h-12 text-phoenix-red mx-auto mb-4" />
              <h3 className="text-lg font-bold mb-3">Strategic Investors</h3>
              <p className="text-muted-foreground">
                Funders who understand the long-term value of digital infrastructure development.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Card className="bg-gradient-cyber border-phoenix-red/30 max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Partner?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss how we can work together to build sustainable digital solutions for African businesses.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="cyber" size="lg">
                  Request Partnership Deck
                  <ArrowRight className="ml-2" />
                </Button>
                <Button variant="cyber-outline" size="lg">
                  Schedule Call
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};