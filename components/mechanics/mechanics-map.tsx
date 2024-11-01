"use client";

import { useEffect, useRef, useState } from "react";
import { useLoadScript } from "@/hooks/use-load-script";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface MechanicsMapProps {
  onSearchResults: (results: google.maps.places.PlaceResult[]) => void;
  selectedMechanic: google.maps.places.PlaceResult | null;
  onMechanicSelect: (mechanic: google.maps.places.PlaceResult) => void;
}

export function MechanicsMap({
  onSearchResults,
  selectedMechanic,
  onMechanicSelect,
}: MechanicsMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const searchBoxRef = useRef<google.maps.places.SearchBox | null>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const [searchInput, setSearchInput] = useState("");

  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || "",
    libraries: ["places"],
  });

  useEffect(() => {
    if (!isLoaded || !mapRef.current || typeof window.google === "undefined") return;

    const defaultLocation = { lat: 40.7128, lng: -74.0060 }; // New York City
    
    const mapOptions: google.maps.MapOptions = {
      center: defaultLocation,
      zoom: 12,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }],
        },
      ],
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);
    mapInstanceRef.current = map;
    
    const input = document.getElementById("mechanics-map-search") as HTMLInputElement;
    if (!input) return;

    const searchBox = new window.google.maps.places.SearchBox(input);
    searchBoxRef.current = searchBox;

    map.addListener("bounds_changed", () => {
      searchBox.setBounds(map.getBounds() as google.maps.LatLngBounds);
    });

    searchBox.addListener("places_changed", () => {
      const places = searchBox.getPlaces();
      if (!places?.length) return;

      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];

      const bounds = new window.google.maps.LatLngBounds();

      places.forEach(place => {
        if (!place.geometry?.location) return;

        const marker = new window.google.maps.Marker({
          map: map,
          position: place.geometry.location,
          title: place.name,
        });

        markersRef.current.push(marker);
        
        if (place.geometry.viewport) {
          bounds.union(place.geometry.viewport);
        } else {
          bounds.extend(place.geometry.location);
        }
      });

      map.fitBounds(bounds);
      onSearchResults(places);
    });

    return () => {
      markersRef.current.forEach(marker => marker.setMap(null));
    };
  }, [isLoaded, onSearchResults]);

  if (loadError) {
    return <div className="p-4">Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div className="p-4">Loading maps...</div>;
  }

  return (
    <div className="relative h-full">
      <div className="absolute inset-x-0 top-0 z-10 p-4">
        <div className="flex gap-2">
          <Input
            id="mechanics-map-search"
            placeholder="Search for mechanics near you..."
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="bg-background"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div ref={mapRef} className="h-full w-full" />
    </div>
  );
}