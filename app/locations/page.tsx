import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { cities } from "@/lib/cities";

export const metadata = {
  title: "Best Mobile Mechanics Locations | Find Expert Services Near You",
  description: "Find the best professional mobile mechanic services in major cities across the USA. Available 24/7 for emergency repairs and maintenance.",
};

export default function LocationsPage() {
  return (
    <main>
      <section className="relative">
        <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Find the Best Mobile Mechanics Near You
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Expert auto repair services available in major cities across the USA
          </p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Link key={city.slug} href={`/locations/${city.slug}`}>
                <Card className="group overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src={city.coverImage}
                      alt={`${city.name} cityscape`}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <h2 className="text-2xl font-bold text-white">
                        {city.name}, {city.state}
                      </h2>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}