import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Zap, Brain, Plus } from "lucide-react";

const services = [
  {
    icon: Globe,
    service: "Web Systems",
    output: "Websites + dashboards",
    tagline: "Pixel-perfect. Blazing fast.",
    cta: "Let's Build",
    price: "From R3,000"
  },
  {
    icon: Zap,
    service: "Automations",
    output: "GoHighLevel, Chatbots",
    tagline: "Sales funnels that actually close.",
    cta: "Set It Up",
    price: "From R2,500"
  },
  {
    icon: Brain,
    service: "Consulting",
    output: "Systems + Strategy",
    tagline: "We help you stop wasting money.",
    cta: "Talk to Us",
    price: "From R1,500"
  },
  {
    icon: Plus,
    service: "Add-ons",
    output: "Animation, Laptop Covers",
    tagline: "We outsource. You shine.",
    cta: "Enquire",
    price: "Custom"
  }
];

export const PhoenixServices = () => {
  return (
    <section className="py-24 bg-gradient-primary relative">
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" 
             style={{
               backgroundImage: `
                 linear-gradient(hsl(var(--phoenix-red)) 1px, transparent 1px),
                 linear-gradient(90deg, hsl(var(--phoenix-red)) 1px, transparent 1px)
               `,
               backgroundSize: '50px 50px'
             }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What We <span className="text-phoenix-red">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We don't build websites. We build what websites should've been all along: revenue systems for African businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.service}
              className="group bg-card/50 backdrop-blur-sm border-phoenix-red/20 hover:border-phoenix-red/60 transition-all duration-300 hover:shadow-cyber hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-phoenix-red/10 rounded-full flex items-center justify-center group-hover:bg-phoenix-red/20 transition-colors duration-300">
                    <service.icon className="w-8 h-8 text-phoenix-red" />
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-2">{service.service}</h3>
                <p className="text-muted-foreground mb-3">{service.output}</p>
                <p className="text-sm text-phoenix-red mb-4 italic">"{service.tagline}"</p>
                
                <div className="space-y-3">
                  <div className="text-sm text-muted-foreground">{service.price}</div>
                  <Button 
                    variant="cyber-outline" 
                    size="sm" 
                    className="w-full group-hover:variant-cyber transition-all duration-300"
                  >
                    {service.cta}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Every system we build is designed to grow with your business
          </p>
          <Button variant="cyber" size="lg">
            View Our Full Capabilities
          </Button>
        </div>
      </div>
    </section>
  );
};