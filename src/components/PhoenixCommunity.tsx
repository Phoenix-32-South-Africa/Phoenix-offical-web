import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Calendar, Users, ArrowRight } from "lucide-react";

const communityFeatures = [
  {
    icon: MessageCircle,
    title: "WhatsApp Group",
    description: "Join our active community of African entrepreneurs sharing knowledge and opportunities.",
    action: "Join Group"
  },
  {
    icon: Calendar,
    title: "Free Events",
    description: "Regular workshops on digital marketing, automation, and business growth strategies.",
    action: "View Events"
  },
  {
    icon: Users,
    title: "Hybrid Training",
    description: "Comprehensive training programs combining online learning with hands-on workshops.",
    action: "Coming Soon",
    disabled: true
  }
];

export const PhoenixCommunity = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-phoenix-red/10 via-transparent to-phoenix-red/5" />
        <div className="h-full w-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--phoenix-red)) 1px, transparent 0)`,
               backgroundSize: '40px 40px'
             }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Empowerment is Our <span className="text-phoenix-red">Side Hustle</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Show heart — but keep it separate from commercial ops. We train because we believe in building the ecosystem, not just our business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {communityFeatures.map((feature, index) => (
            <Card 
              key={feature.title}
              className={`group bg-card/50 backdrop-blur-sm border-phoenix-red/20 hover:border-phoenix-red/60 transition-all duration-300 hover:shadow-cyber hover:-translate-y-2 ${feature.disabled ? 'opacity-75' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto bg-phoenix-red/10 rounded-full flex items-center justify-center group-hover:bg-phoenix-red/20 transition-colors duration-300 mb-4">
                    <feature.icon className="w-8 h-8 text-phoenix-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                </div>

                <Button 
                  variant={feature.disabled ? "ghost" : "cyber-outline"} 
                  size="sm" 
                  className="w-full"
                  disabled={feature.disabled}
                >
                  {feature.action}
                  {!feature.disabled && <ArrowRight className="ml-2 w-4 h-4" />}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <div className="bg-gradient-cyber rounded border border-phoenix-red/30 p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-phoenix-red mb-2">500+</div>
              <div className="text-muted-foreground">Community Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-phoenix-red mb-2">25+</div>
              <div className="text-muted-foreground">Free Workshops</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-phoenix-red mb-2">100+</div>
              <div className="text-muted-foreground">Success Stories</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="max-w-4xl mx-auto text-center">
          <Card className="bg-card/80 backdrop-blur-sm border-phoenix-red/30">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Why We Train</h3>
              <p className="text-lg text-muted-foreground mb-6">
                We believe that a rising tide lifts all boats. By empowering African entrepreneurs with digital skills, 
                we're not just building businesses—we're building the future of our continent.
              </p>
              <p className="text-phoenix-red font-medium">
                This isn't our core offering. This is our contribution to the ecosystem we want to see.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-16">
          <Button variant="cyber" size="lg">
            Join the Movement
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};