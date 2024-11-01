import { notFound } from "next/navigation";
import { CityHero } from "@/components/locations/city-hero";
import { LocalMechanics } from "@/components/locations/local-mechanics";
import { PopularServices } from "@/components/home/popular-services";
import { cities } from "@/lib/cities";

interface LocationPageProps {
  params: {
    city: string;
  };
  searchParams: {
    lat?: string;
    lng?: string;
    address?: string;
  };
}

export function generateStaticParams() {
  return cities.map((city) => ({
    city: city.slug,
  }));
}

export function generateMetadata({ params }: LocationPageProps) {
  const city = cities.find((c) => c.slug === params.city);
  if (!city) return {};

  return {
    title: `Best Mobile Mechanics in ${city.name} | Expert Auto Repair Services`,
    description: `Find the best mobile mechanics in ${city.name}. Professional auto repair services that come to you. Available 24/7 for emergency repairs and maintenance.`,
  };
}

export default function LocationPage({ params, searchParams }: LocationPageProps) {
  const city = cities.find((c) => c.slug === params.city);
  
  if (!city) {
    notFound();
  }

  // Use provided coordinates or fall back to city defaults
  const coordinates = {
    lat: parseFloat(searchParams.lat || city.coordinates.lat.toString()),
    lng: parseFloat(searchParams.lng || city.coordinates.lng.toString()),
  };

  return (
    <main>
      <CityHero city={city} />
      <LocalMechanics 
        city={city} 
        coordinates={coordinates}
        address={searchParams.address}
      />
      <PopularServices />
    </main>
  );
}