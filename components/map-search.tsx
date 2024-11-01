"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface MapSearchProps {
  onSearchResults: (results: any[]) => void;
  selectedLocation: any;
  onLocationSelect: (location: any) => void;
}

export function MapSearch({
  onSearchResults,
  selectedLocation,
  onLocationSelect,
}: MapSearchProps) {
  return (
    <div className="relative h-full bg-muted/50">
      <div className="absolute inset-x-0 top-0 z-10 p-4">
        <div className="flex gap-2">
          <Input
            id="map-search"
            placeholder="Search for mechanics near you..."
            className="bg-background"
          />
          <Button type="submit" size="icon">
            <Search className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="flex h-full items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-semibold">Demo Mode</h3>
          <p className="text-sm text-muted-foreground">
            Map functionality is simulated for demo purposes.
            <br />
            In production, this would show an interactive Google Map.
          </p>
        </div>
      </div>
    </div>
  );
}