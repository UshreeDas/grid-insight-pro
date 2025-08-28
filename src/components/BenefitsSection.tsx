import { CheckCircle, Clock, DollarSign, Users, Globe, Award } from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "50% Faster Processing",
    description: "Reduce administrative time with automated workflows and intelligent data processing."
  },
  {
    icon: DollarSign,
    title: "30% Cost Reduction",
    description: "Optimize procurement costs through predictive analytics and market intelligence."
  },
  {
    icon: Users,
    title: "Government-Ready",
    description: "Built specifically for government compliance, security standards, and scalability requirements."
  },
  {
    icon: Globe,
    title: "Environmental Impact",
    description: "Track and reduce carbon footprint with comprehensive emissions monitoring and reporting."
  },
  {
    icon: Award,
    title: "99.9% Uptime",
    description: "Enterprise-grade reliability ensures continuous operation for critical infrastructure."
  },
  {
    icon: CheckCircle,
    title: "Seamless Integration",
    description: "Easy integration with existing government systems and third-party power management tools."
  }
];

const BenefitsSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 bg-gradient-hero bg-clip-text text-transparent">
            Why Government Bodies Choose PowerGrid Pro
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transform your power management operations with proven results and 
            government-grade security standards.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="group p-8 rounded-xl bg-gradient-to-br from-background to-secondary/20 border border-border/50 hover-lift transition-smooth">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:shadow-glow transition-smooth">
                    <benefit.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold mb-2 text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;