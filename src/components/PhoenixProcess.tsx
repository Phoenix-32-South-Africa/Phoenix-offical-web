import { Search, PenTool, Wrench, Rocket, TrendingUp } from "lucide-react";

const processSteps = [
  {
    icon: Search,
    title: "Discovery Call",
    description: "We analyze your business, goals, and current systems to understand what needs to be built."
  },
  {
    icon: PenTool,
    title: "Proposal & Pricing",
    description: "Transparent pricing with detailed scope. No hidden costs. No surprises."
  },
  {
    icon: Wrench,
    title: "Build & Test",
    description: "Agile development with regular updates. You see progress every step of the way."
  },
  {
    icon: Rocket,
    title: "Launch",
    description: "Seamless deployment with full training and handover documentation."
  },
  {
    icon: TrendingUp,
    title: "Support + Scale",
    description: "Ongoing maintenance and growth optimization. We're in this for the long haul."
  }
];

export const PhoenixProcess = () => {
  return (
    <section className="py-24 bg-background relative overflow-hidden">
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-20 gap-1 h-full w-full">
          {Array.from({ length: 400 }).map((_, i) => (
            <div
              key={i}
              className="border border-phoenix-red animate-pulse"
              style={{ animationDelay: `${i * 0.05}s` }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-phoenix-red">Process</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Build trust by showing your workflow is structured, not chaotic.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-phoenix-red via-phoenix-red to-phoenix-red/30 transform -translate-y-1/2" />
              
              <div className="grid grid-cols-5 gap-8">
                {processSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="relative text-center"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Timeline Node */}
                    <div className="relative mb-8">
                      <div className="w-16 h-16 bg-phoenix-red rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse-red">
                        <step.icon className="w-8 h-8 text-primary-foreground" />
                      </div>
                      <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-phoenix-red/30 rounded-full animate-ping" />
                    </div>

                    <div className="bg-card/80 backdrop-blur-sm border border-phoenix-red/20 rounded p-6 hover:border-phoenix-red/40 transition-all duration-300">
                      <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                      <p className="text-sm text-muted-foreground">{step.description}</p>
                    </div>

                    {/* Step Number */}
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-phoenix-red rounded-full flex items-center justify-center text-sm font-bold">
                      {index + 1}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Timeline */}
          <div className="lg:hidden space-y-12">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className="flex items-start space-x-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 bg-phoenix-red rounded-full flex items-center justify-center animate-pulse-red">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -top-2 -left-2 w-20 h-20 border-2 border-phoenix-red/30 rounded-full animate-ping" />
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-16 left-1/2 w-1 h-16 bg-gradient-to-b from-phoenix-red to-phoenix-red/30 transform -translate-x-1/2" />
                  )}
                </div>

                <div className="flex-1">
                  <div className="bg-card/80 backdrop-blur-sm border border-phoenix-red/20 rounded p-6 hover:border-phoenix-red/40 transition-all duration-300">
                    <div className="flex items-center mb-3">
                      <span className="w-8 h-8 bg-phoenix-red rounded-full flex items-center justify-center text-sm font-bold mr-3">
                        {index + 1}
                      </span>
                      <h3 className="text-lg font-bold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-6">
            Ready to start your digital transformation?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-phoenix-red text-primary-foreground rounded hover:bg-phoenix-red-dark transition-colors duration-300">
              Schedule Discovery Call
            </button>
            <button className="px-8 py-3 border border-phoenix-red text-phoenix-red rounded hover:bg-phoenix-red hover:text-primary-foreground transition-all duration-300">
              View Our Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};