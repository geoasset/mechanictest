import { AdvertiseHero } from "@/components/advertise/advertise-hero";
import { AdvertiseForm } from "@/components/advertise/advertise-form";
import { Benefits } from "@/components/advertise/benefits";
import { Pricing } from "@/components/advertise/pricing";

export default function AdvertisePage() {
  return (
    <main>
      <AdvertiseHero />
      <Benefits />
      <AdvertiseForm />
    </main>
  );
}