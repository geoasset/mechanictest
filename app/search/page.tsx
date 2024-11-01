"use client";

import { useState } from "react";
import { MapSearch } from "@/components/map-search";
import { SearchResults } from "@/components/search-results";
import { SearchFilters } from "@/components/search-filters";
import { Card } from "@/components/ui/card";

export default function SearchPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState(null);

  return (
    <div className="container grid gap-6 py-8 md:grid-cols-[350px,1fr] lg:gap-8">
      <div className="space-y-6">
        <SearchFilters />
        <Card className="p-4">
          <SearchResults 
            results={searchResults} 
            selectedLocation={selectedLocation}
            onLocationSelect={setSelectedLocation}
          />
        </Card>
      </div>
      <Card className="h-[calc(100vh-10rem)] overflow-hidden">
        <MapSearch
          onSearchResults={setSearchResults}
          selectedLocation={selectedLocation}
          onLocationSelect={setSelectedLocation}
        />
      </Card>
    </div>
  );
}