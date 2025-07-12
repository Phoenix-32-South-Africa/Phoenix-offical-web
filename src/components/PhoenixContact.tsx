import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MessageSquare, Mail, Phone, MapPin, Calendar } from "lucide-react";

export const PhoenixContact = () => {
  return (
    <section className="py-24 bg-background relative">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" 
             style={{
               backgroundImage: `
                 linear-gradient(hsl(var(--phoenix-red)) 1px, transparent 1px),
                 linear-gradient(90deg, hsl(var(--phoenix-red)) 1px, transparent 1px)
               `,
               backgroundSize: '60px 60px',
               animation: 'cyber-float 20s ease-in-out infinite'
             }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Let's Start Your <span className="text-phoenix-red">Build</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Keep this tight and serious. Ready to transform your business with future-ready digital systems?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card/80 backdrop-blur-sm border-phoenix-red/30 hover:border-phoenix-red/50 transition-all duration-300">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-6">Start Your Project</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium mb-2 block">Name</Label>
                    <Input 
                      id="name" 
                      placeholder="Your name" 
                      className="bg-muted/50 border-phoenix-red/20 focus:border-phoenix-red"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium mb-2 block">Email</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-muted/50 border-phoenix-red/20 focus:border-phoenix-red"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="budget" className="text-sm font-medium mb-2 block">Budget Range</Label>
                  <Select>
                    <SelectTrigger className="bg-muted/50 border-phoenix-red/20 focus:border-phoenix-red">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under R5,000</SelectItem>
                      <SelectItem value="5k-15k">R5,000 - R15,000</SelectItem>
                      <SelectItem value="15k-50k">R15,000 - R50,000</SelectItem>
                      <SelectItem value="50k-plus">R50,000+</SelectItem>
                      <SelectItem value="enterprise">Enterprise (Custom)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium mb-2 block">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us about your project..." 
                    rows={5}
                    className="bg-muted/50 border-phoenix-red/20 focus:border-phoenix-red resize-none"
                  />
                </div>

                <Button variant="cyber" size="lg" className="w-full">
                  Send Message
                  <MessageSquare className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <Card className="bg-card/50 backdrop-blur-sm border-phoenix-red/20 hover:border-phoenix-red/40 transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-phoenix-red/10 rounded-full flex items-center justify-center">
                      <Mail className="w-5 h-5 text-phoenix-red" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">alphasydwell93@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-phoenix-red/10 rounded-full flex items-center justify-center">
                      <Phone className="w-5 h-5 text-phoenix-red" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">WhatsApp</p>
                      <p className="font-medium">Available 24/7</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-phoenix-red/10 rounded-full flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-phoenix-red" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Based in</p>
                      <p className="font-medium">Soweto, South Africa</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="bg-gradient-cyber border-phoenix-red/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Button variant="cyber-outline" className="w-full justify-start">
                    <Calendar className="mr-3 w-4 h-4" />
                    Schedule Free Discovery Call
                  </Button>
                  <Button variant="cyber-ghost" className="w-full justify-start">
                    <MessageSquare className="mr-3 w-4 h-4" />
                    Join WhatsApp Community
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Response Time */}
            <Card className="bg-card/50 backdrop-blur-sm border-phoenix-red/20">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-phoenix-red/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-phoenix-red">24h</span>
                </div>
                <h4 className="font-bold mb-2">Fast Response</h4>
                <p className="text-sm text-muted-foreground">
                  We respond to all inquiries within 24 hours. Usually much faster.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Company Registration */}
        <div className="text-center mt-16 pt-8 border-t border-phoenix-red/20">
          <p className="text-sm text-muted-foreground">
            Company Registration #: K2025106650
          </p>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          variant="cyber" 
          size="icon" 
          className="w-14 h-14 rounded-full shadow-cyber animate-pulse-red"
        >
          <MessageSquare className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
};