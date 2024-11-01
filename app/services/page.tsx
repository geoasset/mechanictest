import { ServicesList } from "@/components/services/services-list";
import { ServicesPricing } from "@/components/services/services-pricing";
import { ServicesHero } from "@/components/services/services-hero";

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServicesPricing />
    </>
  );
}