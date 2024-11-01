import Image from "next/image";
import { Card } from "@/components/ui/card";

export function TrustedMechanics() {
  const mechanics = [
    {
      name: "John Smith",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=200&h=200",
      rating: 4.9,
      reviews: 156,
      specialty: "European Cars",
    },
    {
      name: "Sarah Johnson",
      image: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=200&h=200",
      rating: 4.8,
      reviews: 142,
      specialty: "Japanese Vehicles",
    },
    {
      name: "Mike Davis",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?auto=format&fit=crop&w=200&h=200",
      rating: 4.9,
      reviews: 189,
      specialty: "Domestic Cars",
    },
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Our Top-Rated Mobile Mechanics
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {mechanics.map((mechanic) => (
            <Card key={mechanic.name} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={mechanic.image}
                  alt={mechanic.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{mechanic.name}</h3>
                <p className="text-sm text-muted-foreground">{mechanic.specialty}</p>
                <div className="mt-2 flex items-center text-sm">
                  <span className="font-medium">{mechanic.rating}</span>
                  <span className="mx-1">•</span>
                  <span>{mechanic.reviews} reviews</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}