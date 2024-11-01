import { Wrench, Battery, Gauge, AlertCircle } from "lucide-react";
import { ServiceLinkCard } from "./service-link-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  { Icon: Wrench, name: "Oil Change" },
  { Icon: Battery, name: "Battery Replacement" },
  { Icon: Gauge, name: "Brake Service" },
  { Icon: AlertCircle, name: "Diagnostic" }
];

export function PopularServices() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Popular Services
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceLinkCard key={service.name} {...service} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}