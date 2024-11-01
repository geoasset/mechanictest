import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cities } from "@/lib/cities";

export function PopularLocations() {
  // Sort cities by population and get top 6
  const topCities = [...cities]
    .sort((a, b) => b.population - a.population)
    .slice(0, 6);

  return (
    <section className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Popular Locations
        </h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {topCities.map((city) => (
            <Link
              key={city.slug}
              href={`/locations/${city.slug}?lat=${city.coordinates.lat}&lng=${city.coordinates.lng}`}
              className="block"
            >
              <Card className="flex items-center justify-between p-4 transition-colors hover:bg-muted/50">
                <div className="flex items-center space-x-4">
                  <MapPin className="h-5 w-5" />
                  <span>{city.name}, {city.state}</span>
                </div>
                <ArrowRight className="h-5 w-5" />
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}