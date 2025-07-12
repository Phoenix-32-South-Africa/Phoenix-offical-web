import { Button } from "@/components/ui/button";
import heroBackground from "@/assets/hero-bg.jpg";
import { ArrowRight, Shield, Zap, TrendingUp, Users } from "lucide-react";

export const PhoenixHero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-primary">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${heroBackground})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-phoenix-black via-phoenix-black/90 to-phoenix-red/20" />
      
      {/* Floating Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-1 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-phoenix-red animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground to-phoenix-red bg-clip-text text-transparent">
            High-End Digital Systems.
            <br />
            <span className="text-phoenix-red">Made for Africa.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Websites. Automation. Strategy. Delivered like it's 2035.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Button 
              variant="cyber" 
              size="xl" 
              className="animate-pulse-red"
            >
              Start a Project
              <ArrowRight className="ml-2" />
            </Button>
            <Button 
              variant="cyber-outline" 
              size="xl"
            >
              See How We Work
            </Button>
          </div>

          {/* Highlight Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded border border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
              <Shield className="w-8 h-8 text-phoenix-red mb-2" />
              <span className="text-sm font-medium">Secure</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded border border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
              <Zap className="w-8 h-8 text-phoenix-red mb-2" />
              <span className="text-sm font-medium">Fast Launch</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded border border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
              <TrendingUp className="w-8 h-8 text-phoenix-red mb-2" />
              <span className="text-sm font-medium">Scalable</span>
            </div>
            <div className="flex flex-col items-center p-4 bg-card/50 backdrop-blur-sm rounded border border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
              <Users className="w-8 h-8 text-phoenix-red mb-2" />
              <span className="text-sm font-medium">Human Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Pulse Effect */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <div className="w-1 h-16 bg-gradient-to-b from-phoenix-red to-transparent animate-pulse" />
      </div>
    </section>
  );
};