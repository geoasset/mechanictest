import Image from "next/image";
import { City } from "@/lib/cities";

interface CityHeroProps {
  city: City;
}

export function CityHero({ city }: CityHeroProps) {
  return (
    <section className="relative">
      <div className="absolute inset-0">
        <Image
          src={city.coverImage}
          alt={`${city.name} cityscape`}
          fill
          className="object-cover brightness-50"
          priority
        />
      </div>
      <div className="relative container flex flex-col items-center justify-center space-y-4 py-32 text-center text-white md:py-40">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Mobile Mechanics in {city.name}, {city.state}
        </h1>
        <p className="mx-auto max-w-[700px] text-lg md:text-xl">
          Professional auto repair services that come to you in {city.name}. Available 24/7 for emergency repairs and maintenance.
        </p>
      </div>
    </section>
  );
}