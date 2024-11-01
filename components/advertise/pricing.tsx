import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function Pricing() {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "per month",
      description: "Perfect for independent mechanics",
      features: [
        "Basic business profile",
        "Up to 50 leads per month",
        "Customer reviews management",
        "Basic analytics dashboard",
      ],
    },
    {
      name: "Professional",
      price: "$99",
      period: "per month",
      description: "Ideal for growing businesses",
      features: [
        "Enhanced business profile",
        "Unlimited leads",
        "Priority listing placement",
        "Advanced analytics",
        "Customer messaging system",
        "Booking management tools",
      ],
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "per month",
      description: "For multi-location businesses",
      features: [
        "All Professional features",
        "Multiple location management",
        "API access",
        "Dedicated account manager",
        "Custom reporting",
        "White-label options",
      ],
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Advertising Plans
        </h2>
        <p className="mt-4 text-center text-muted-foreground">
          Choose the perfect plan to grow your business
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col p-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4">
                <span className="text-3xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground">/{plan.period}</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {plan.description}
              </p>
              <ul className="mt-6 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-primary" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              <Button className="mt-8">Get Started</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}