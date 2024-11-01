import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Basic",
    price: "$29.99",
    description: "Perfect for basic maintenance",
    features: [
      "Oil change service",
      "Tire rotation",
      "Basic inspection",
      "Fluid check"
    ]
  },
  {
    name: "Standard",
    price: "$89.99",
    description: "Most popular maintenance package",
    features: [
      "Everything in Basic",
      "Brake inspection",
      "Battery test",
      "Filter replacement",
      "Multi-point inspection"
    ]
  },
  {
    name: "Premium",
    price: "$149.99",
    description: "Comprehensive service package",
    features: [
      "Everything in Standard",
      "AC system check",
      "Computer diagnostic",
      "Alignment check",
      "Spark plug inspection",
      "Premium oil change"
    ]
  }
];

export function ServicesPricing() {
  return (
    <section className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container">
        <div className="text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Maintenance Packages
          </h2>
          <p className="mt-4 text-muted-foreground">
            Choose the perfect maintenance package for your vehicle
          </p>
        </div>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col p-6">
              <h3 className="text-xl font-semibold">{plan.name}</h3>
              <div className="mt-4 text-3xl font-bold">{plan.price}</div>
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
              <Button className="mt-8">Choose Plan</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}