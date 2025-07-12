import { MessageSquare, Mail, Linkedin, Twitter, Github } from "lucide-react";

export const PhoenixFooter = () => {
  return (
    <footer className="py-16 bg-phoenix-black border-t border-phoenix-red/20 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="h-full w-full" 
             style={{
               backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--phoenix-red)) 1px, transparent 0)`,
               backgroundSize: '30px 30px'
             }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Left Side - Logo & Mission */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-phoenix-red mb-2">Phoenix 32</h3>
              <p className="text-muted-foreground max-w-md">
                High-end digital systems for African businesses. Building the future, one line of code at a time.
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              <p>Company Reg #: K2025106650</p>
              <p className="mt-2">© 2024 Phoenix 32. All rights reserved.</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-phoenix-red">Quick Links</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a href="#services" className="hover:text-phoenix-red transition-colors duration-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#work" className="hover:text-phoenix-red transition-colors duration-300">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-phoenix-red transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-phoenix-red transition-colors duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#community" className="hover:text-phoenix-red transition-colors duration-300">
                  Community
                </a>
              </li>
              <li>
                <a href="#partner" className="hover:text-phoenix-red transition-colors duration-300">
                  Partnership
                </a>
              </li>
            </ul>
          </div>

          {/* Socials & Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-phoenix-red">Connect</h4>
            <div className="space-y-4">
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-phoenix-red/10 rounded-full flex items-center justify-center hover:bg-phoenix-red/20 transition-colors duration-300"
                >
                  <Linkedin className="w-5 h-5 text-phoenix-red" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-phoenix-red/10 rounded-full flex items-center justify-center hover:bg-phoenix-red/20 transition-colors duration-300"
                >
                  <Twitter className="w-5 h-5 text-phoenix-red" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-phoenix-red/10 rounded-full flex items-center justify-center hover:bg-phoenix-red/20 transition-colors duration-300"
                >
                  <Github className="w-5 h-5 text-phoenix-red" />
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-phoenix-red/10 rounded-full flex items-center justify-center hover:bg-phoenix-red/20 transition-colors duration-300"
                >
                  <MessageSquare className="w-5 h-5 text-phoenix-red" />
                </a>
              </div>
              
              <div className="text-sm text-muted-foreground">
                <div className="flex items-center space-x-2 mb-2">
                  <Mail className="w-4 h-4 text-phoenix-red" />
                  <span>alphasydwell93@gmail.com</span>
                </div>
                <p>Built with 🔥 in Soweto</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-phoenix-red/20 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-muted-foreground mb-4 md:mb-0">
            Designed and developed with African excellence in mind.
          </div>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <a href="#" className="hover:text-phoenix-red transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-phoenix-red transition-colors duration-300">Terms of Service</a>
            <a href="#" className="hover:text-phoenix-red transition-colors duration-300">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};