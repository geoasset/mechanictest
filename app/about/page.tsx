import { AboutHero } from "@/components/about/about-hero";
import { OurMission } from "@/components/about/our-mission";
import { OurValues } from "@/components/about/our-values";
import { TeamSection } from "@/components/about/team-section";

export default function AboutPage() {
  return (
    <main>
      <AboutHero />
      <OurMission />
      <OurValues />
    </main>
  );
}