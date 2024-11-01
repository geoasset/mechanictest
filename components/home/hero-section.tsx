"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useLoadScript } from "@/hooks/use-load-script";

export function HeroSection() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded || !inputRef.current) return;

    autocompleteRef.current = new google.maps.places.Autocomplete(inputRef.current, {
      types: ["(cities)"],
      componentRestrictions: { country: "us" },
    });

    autocompleteRef.current.addListener("place_changed", () => {
      const place = autocompleteRef.current?.getPlace();
      if (place?.geometry?.location) {
        const lat = place.geometry.location.lat();
        const lng = place.geometry.location.lng();
        const formattedAddress = place.formatted_address || "";
        const cityName = place.address_components?.find(
          (component) => component.types.includes("locality")
        )?.long_name;

        if (cityName) {
          router.push(`/locations/${cityName.toLowerCase().replace(/\s+/g, "-")}?lat=${lat}&lng=${lng}&address=${encodeURIComponent(formattedAddress)}`);
        }
      }
    });

    return () => {
      google.maps.event.clearInstanceListeners(autocompleteRef.current!);
    };
  }, [isLoaded, router]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (location && !autocompleteRef.current?.getPlace()) {
      // If no place is selected from autocomplete, trigger the first suggestion
      const input = inputRef.current;
      if (input) {
        const ke = new KeyboardEvent("keydown", {
          key: "Enter",
          code: "Enter",
          keyCode: 13,
          bubbles: true,
        });
        input.dispatchEvent(ke);
      }
    }
  };

  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center space-y-4 py-32 text-center md:py-36">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
          Find the Best Mobile Mechanics
          <br />
          Near You
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Expert mobile mechanics available 24/7. Get instant quotes and book your service today.
        </p>
        <form onSubmit={handleSearch} className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
          <Input
            ref={inputRef}
            type="text"
            placeholder="Enter your city..."
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="h-12"
          />
          <Button type="submit" size="lg" className="h-12">
            <Search className="mr-2 h-5 w-5" />
            Find Mechanics
          </Button>
        </form>
      </div>
    </section>
  );
}