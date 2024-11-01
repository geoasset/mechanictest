import { DollarSign, Clock, Users, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Benefits() {
  const benefits = [
    {
      icon: DollarSign,
      title: "Earn More",
      description: "Set your own rates and keep more of what you earn with our competitive commission structure.",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Work when you want, where you want. You're in control of your availability.",
    },
    {
      icon: Users,
      title: "Growing Customer Base",
      description: "Access a large network of customers looking for quality mobile mechanic services.",
    },
    {
      icon: Shield,
      title: "Professional Support",
      description: "Get liability insurance coverage and 24/7 support from our dedicated team.",
    },
  ];

  return (
    <section className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Why Join MobileMechanics?
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map(({ icon: Icon, title, description }) => (
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