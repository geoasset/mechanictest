"use client";

import { Card } from "@/components/ui/card";
import { Star, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SearchResultsProps {
  results: any[];
  selectedLocation: any;
  onLocationSelect: (location: any) => void;
}

const DEMO_RESULTS = [
  {
    id: 1,
    name: "Quick Fix Auto Service",
    rating: 4.8,
    reviews: 128,
    address: "123 Main St, New York, NY",
    isOpen: true,
    distance: "0.8 miles"
  },
  {
    id: 2,
    name: "Mobile Mechanics Pro",
    rating: 4.6,
    reviews: 89,
    address: "456 Park Ave, New York, NY",
    isOpen: true,
    distance: "1.2 miles"
  },
  {
    id: 3,
    name: "24/7 Emergency Auto Repair",
    rating: 4.9,
    reviews: 256,
    address: "789 Broadway, New York, NY",
    isOpen: true,
    distance: "1.5 miles"
  }
];

export function SearchResults({
  selectedLocation,
  onLocationSelect,
}: SearchResultsProps) {
  return (
    <div className="space-y-4">
      {DEMO_RESULTS.map((result) => (
        <Card
          key={result.id}
          className={`p-4 transition-colors hover:bg-muted/50 ${
            selectedLocation?.id === result.id ? "border-primary" : ""
          }`}
          onClick={() => onLocationSelect(result)}
        >
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold">{result.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm">
                  {result.rating} ({result.reviews})
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{result.address}</span>
            </div>
            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span>{result.isOpen ? "Open now" : "Closed"}</span>
              </div>
              <span>{result.distance}</span>
            </div>
            <Button className="w-full" variant="secondary">
              View Details
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}