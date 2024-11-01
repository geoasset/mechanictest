import { Users, TrendingUp, Calendar, Shield } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Benefits() {
  const benefits = [
    {
      icon: Users,
      title: "Expand Your Reach",
      description: "Access thousands of potential customers actively searching for mobile mechanics in your area.",
    },
    {
      icon: TrendingUp,
      title: "Increase Revenue",
      description: "Grow your business with a steady stream of new customers and repeat business.",
    },
    {
      icon: Calendar,
      title: "Smart Scheduling",
      description: "Our platform helps you manage bookings efficiently and reduce downtime.",
    },
    {
      icon: Shield,
      title: "Build Trust",
      description: "Showcase your credentials, reviews, and ratings to build customer confidence.",
    },
  ];

  return (
    <section className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Why Advertise With Us?
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