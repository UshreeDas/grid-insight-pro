import { Zap, Mail, Phone, MapPin, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">PowerGrid Pro</span>
            </div>
            <p className="text-background/80 leading-relaxed">
              Advanced ERP solution for government bodies to manage electricity infrastructure 
              with intelligence, efficiency, and environmental responsibility.
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Solutions</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-smooth">Demand Forecasting</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Power Procurement</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Battery Monitoring</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Carbon Tracking</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Resources</h3>
            <ul className="space-y-2 text-background/80">
              <li><a href="#" className="hover:text-primary transition-smooth">Documentation</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">API Reference</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Case Studies</a></li>
              <li><a href="#" className="hover:text-primary transition-smooth">Support</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-heading text-lg font-semibold">Contact</h3>
            <div className="space-y-3 text-background/80">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>contact@powergridpro.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Washington, DC</span>
              </div>
            </div>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-background/60 hover:text-primary transition-smooth">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 mt-12 pt-8 text-center text-background/60">
          <p>&copy; 2024 PowerGrid Pro. All rights reserved. Government-certified ERP solution.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;