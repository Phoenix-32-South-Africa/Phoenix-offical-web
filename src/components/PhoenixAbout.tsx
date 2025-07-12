import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Quote, Code, Settings, Database, Shield } from "lucide-react";

const team = [
  {
    name: "Sydwell",
    role: "CEO / Full Stack",
    icon: Code,
    description: "Visionary leader with full-stack expertise driving Phoenix 32's technical innovation."
  },
  {
    name: "Dumisani",
    role: "COO / Frontend",
    icon: Settings,
    description: "Operations mastermind ensuring seamless project delivery and client satisfaction."
  },
  {
    name: "Bheki",
    role: "Backend Dev",
    icon: Database,
    description: "Backend architect building robust, scalable systems that power your business."
  },
  {
    name: "RLM",
    role: "Admin / Ops",
    icon: Shield,
    description: "Administrative backbone ensuring smooth operations and client communications."
  }
];

export const PhoenixAbout = () => {
  return (
    <section className="py-24 bg-gradient-primary relative">
      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-phoenix-red rounded-full animate-cyber-float" />
        <div className="absolute top-40 right-20 w-3 h-3 bg-phoenix-red/60 rounded-full animate-cyber-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-phoenix-red rounded-full animate-cyber-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-phoenix-red/40 rounded-full animate-cyber-float" style={{ animationDelay: '0.5s' }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Who We <span className="text-phoenix-red">Are</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-foreground mb-8">
              "We're a digital solutions company built for the modern African entrepreneur."
            </p>
            <p className="text-lg text-muted-foreground">
              Prove you're not a solo freelancer in disguise. You're a studio.
            </p>
          </div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {team.map((member, index) => (
            <Card 
              key={member.name}
              className="group bg-card/50 backdrop-blur-sm border-phoenix-red/20 hover:border-phoenix-red/60 transition-all duration-300 hover:shadow-cyber hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-phoenix-red/10 rounded-full flex items-center justify-center group-hover:bg-phoenix-red/20 transition-colors duration-300 mb-4">
                    <member.icon className="w-8 h-8 text-phoenix-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-phoenix-red text-sm font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CEO Quote */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-sm border-phoenix-red/30 hover:border-phoenix-red/50 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-phoenix-red/10 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-phoenix-red" />
                  </div>
                </div>
                <div className="flex-1">
                  <blockquote className="text-xl md:text-2xl font-medium mb-4 text-foreground">
                    "We don't sell websites. We build infrastructure for your business to grow."
                  </blockquote>
                  <cite className="text-phoenix-red font-medium">— Sydwell, CEO & Founder</cite>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded border border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
            <h3 className="text-lg font-bold mb-3 text-phoenix-red">African-First</h3>
            <p className="text-muted-foreground">Built by Africans, for African businesses. We understand the unique challenges and opportunities of our market.</p>
          </div>
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded border border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
            <h3 className="text-lg font-bold mb-3 text-phoenix-red">Future-Ready</h3>
            <p className="text-muted-foreground">Every solution is built with tomorrow's technology today. We don't just catch up—we lead.</p>
          </div>
          <div className="text-center p-6 bg-card/30 backdrop-blur-sm rounded border border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
            <h3 className="text-lg font-bold mb-3 text-phoenix-red">Results-Driven</h3>
            <p className="text-muted-foreground">We measure success by your growth. Every line of code serves your bottom line.</p>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button variant="cyber" size="lg">
            Work With Our Team
          </Button>
        </div>
      </div>
    </section>
  );
};