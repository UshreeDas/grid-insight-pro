import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Zap, Battery, Leaf, BarChart3, Shield } from "lucide-react";
import forecastingImage from "@/assets/forecasting-dashboard.jpg";
import batteryImage from "@/assets/battery-monitoring.jpg";

const features = [
  {
    icon: TrendingUp,
    title: "Demand Forecasting",
    description: "Advanced AI-powered algorithms predict electricity demand with 99.2% accuracy, enabling optimal resource planning and cost reduction.",
    image: forecastingImage,
    gradient: "from-primary/20 to-primary-glow/20"
  },
  {
    icon: Zap,
    title: "Power Procurement",
    description: "Streamlined procurement process from generating stations with automated bidding, contract management, and real-time price optimization.",
    gradient: "from-accent/20 to-accent-glow/20"
  },
  {
    icon: Battery,
    title: "Battery Banking Status",
    description: "Comprehensive monitoring of consumer battery systems with health diagnostics, performance analytics, and predictive maintenance alerts.",
    image: batteryImage,
    gradient: "from-primary/20 to-accent/20"
  },
  {
    icon: Leaf,
    title: "Carbon Emissions Tracking",
    description: "Real-time monitoring and reporting of carbon emissions with automated compliance tracking and sustainability metrics.",
    gradient: "from-accent/20 to-primary/20"
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description: "Comprehensive dashboards with real-time insights, performance metrics, and customizable reporting for informed decision-making.",
    gradient: "from-primary-glow/20 to-accent-glow/20"
  },
  {
    icon: Shield,
    title: "Government Security",
    description: "Enterprise-grade security with government compliance standards, encrypted data transmission, and role-based access control.",
    gradient: "from-accent-glow/20 to-primary-glow/20"
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Comprehensive Power Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything government bodies need to efficiently manage electricity infrastructure, 
            from forecasting to procurement, monitoring to emissions tracking.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover-lift border-0 bg-background/80 backdrop-blur-sm shadow-soft hover:shadow-medium">
              <CardHeader className="pb-4">
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 transition-smooth group-hover:scale-110`}>
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="font-heading text-xl font-semibold">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {feature.image && (
                  <div className="rounded-lg overflow-hidden">
                    <img 
                      src={feature.image} 
                      alt={feature.title}
                      className="w-full h-40 object-cover transition-smooth group-hover:scale-105"
                    />
                  </div>
                )}
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;