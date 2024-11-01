import { Shield, Heart, Sun, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

export function OurValues() {
  const values = [
    {
      icon: Shield,
      title: "Trust & Reliability",
      description: "We build lasting relationships through honest service and dependable results.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description: "Your satisfaction and convenience are at the heart of everything we do.",
    },
    {
      icon: Sun,
      title: "Transparency",
      description: "Clear communication and upfront pricing with no hidden fees.",
    },
    {
      icon: Zap,
      title: "Excellence",
      description: "Committed to delivering top-quality service with certified professionals.",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">Our Values</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, description }) => (
            <Card key={title} className="p-6">
              <Icon className="h-12 w-12 text-primary" />
              <h3 className="mt-4 text-xl font-semibold">{title}</h3>
              <p className="mt-2 text-muted-foreground">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}