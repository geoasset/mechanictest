import { Clock, Shield, Star } from "lucide-react";
import { FeatureCard } from "./feature-card";

export function FeaturesSection() {
  const features = [
    {
      Icon: Clock,
      title: "24/7 Availability",
      description: "Emergency repairs and scheduled maintenance any time, any day.",
    },
    {
      Icon: Shield,
      title: "Licensed & Insured",
      description: "All our mechanics are certified professionals with full insurance coverage.",
    },
    {
      Icon: Star,
      title: "Satisfaction Guaranteed",
      description: "Backed by our 100% satisfaction guarantee on all services.",
    },
  ];

  return (
    <section className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Why Choose Our Mobile Mechanics?
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}