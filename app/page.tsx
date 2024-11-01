import { PopularLocations } from "@/components/home/popular-locations";
import { HeroSection } from "@/components/home/hero-section";
import { FeaturesSection } from "@/components/home/features-section";
import { TrustedMechanics } from "@/components/home/trusted-mechanics";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <PopularLocations />
      <FeaturesSection />
      <TrustedMechanics />
    </main>
  );
}