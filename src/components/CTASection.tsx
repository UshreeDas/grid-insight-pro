import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform Your Power Management?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-12 max-w-2xl mx-auto leading-relaxed">
            Join leading government bodies already using PowerGrid Pro to streamline 
            their electricity infrastructure management and reduce operational costs.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-accent-glow" />
              <span className="font-medium">Implementation in 30 days</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-accent-glow" />
              <span className="font-medium">24/7 government support</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-primary-foreground/90">
              <CheckCircle className="w-5 h-5 text-accent-glow" />
              <span className="font-medium">ROI guarantee</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              variant="secondary" 
              size="lg" 
              className="group bg-background text-foreground hover:bg-background/90"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 backdrop-blur-sm"
            >
              Schedule Consultation
            </Button>
          </div>

          <p className="text-sm text-primary-foreground/70 mt-8">
            Trusted by 150+ government agencies worldwide • SOC 2 Type II Certified • GDPR Compliant
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;