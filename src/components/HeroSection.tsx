import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, TrendingUp, Battery } from "lucide-react";
import heroImage from "@/assets/hero-energy-grid.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Modern electricity grid management" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-8 transition-smooth hover-glow">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Government-Grade ERP Solution</span>
          </div>
          
          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-7xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent leading-tight">
            PowerGrid Pro
          </h1>
          
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground/90 mb-8">
            Advanced Electricity Demand Forecasting & Power Procurement ERP
          </h2>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Streamline power management for government bodies with intelligent forecasting, 
            seamless procurement, battery monitoring, and carbon emissions tracking in one unified platform.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="group">
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="bg-background/50 backdrop-blur-sm">
              Schedule Demo
            </Button>
          </div>
          
          {/* Feature Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/20 backdrop-blur-sm border border-white/10">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="font-medium">Smart Forecasting</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/20 backdrop-blur-sm border border-white/10">
              <Zap className="w-6 h-6 text-accent" />
              <span className="font-medium">Power Procurement</span>
            </div>
            <div className="flex items-center justify-center gap-3 p-4 rounded-lg bg-background/20 backdrop-blur-sm border border-white/10">
              <Battery className="w-6 h-6 text-primary" />
              <span className="font-medium">Battery Monitoring</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;