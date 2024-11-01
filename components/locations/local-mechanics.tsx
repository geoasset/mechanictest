"use client";

import { useState, useEffect } from "react";
import { City } from "@/lib/cities";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Phone } from "lucide-react";
import { useLoadScript } from "@/hooks/use-load-script";

interface LocalMechanicsProps {
  city: City;
  coordinates: {
    lat: number;
    lng: number;
  };
  address?: string;
}

export function LocalMechanics({ city, coordinates, address }: LocalMechanicsProps) {
  const [mechanics, setMechanics] = useState<any[]>([]);
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded) return;

    const searchNearbyMechanics = async () => {
      const service = new google.maps.places.PlacesService(
        document.createElement("div")
      );

      const request = {
        location: new google.maps.LatLng(coordinates.lat, coordinates.lng),
        radius: 5000, // 5km radius
        type: "car_repair",
        keyword: "mobile mechanic",
      };

      service.nearbySearch(request, (results, status) => {
        if (status === google.maps.places.PlacesServiceStatus.OK && results) {
          setMechanics(results.slice(0, 6)); // Show top 6 results
        }
      });
    };

    searchNearbyMechanics();
  }, [isLoaded, coordinates]);

  if (!mechanics.length) {
    return (
      <section className="py-12 md:py-16">
        <div className="container">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            Mobile Mechanics in {city.name}
          </h2>
          <Card className="mt-8 p-6 text-center">
            <p>Searching for mechanics in your area...</p>
          </Card>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
          Top-Rated Mechanics near {address || city.name}
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mechanics.map((mechanic) => (
            <Card key={mechanic.place_id} className="flex flex-col p-6">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{mechanic.name}</h3>
                <div className="flex items-center space-x-1">
                  <Star className="h-4 w-4 fill-primary text-primary" />
                  <span className="text-sm">
                    {mechanic.rating} ({mechanic.user_ratings_total})
                  </span>
                </div>
              </div>
              <div className="mt-4 space-y-2 text-sm text-muted-foreground">
                <div className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>{mechanic.vicinity}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-4 w-4" />
                  <span>{mechanic.opening_hours?.open_now ? "Open Now" : "Closed"}</span>
                </div>
              </div>
              <Button className="mt-6">Book Now</Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}