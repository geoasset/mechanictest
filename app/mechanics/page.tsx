"use client";

import { useState } from "react";
import { MechanicsList } from "@/components/mechanics/mechanics-list";
import { MechanicsMap } from "@/components/mechanics/mechanics-map";
import { MechanicsFilters } from "@/components/mechanics/mechanics-filters";
import { Card } from "@/components/ui/card";

export default function MechanicsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedMechanic, setSelectedMechanic] = useState(null);

  return (
    <div className="container grid gap-6 py-8 md:grid-cols-[350px,1fr] lg:gap-8">
      <div className="space-y-6">
        <MechanicsFilters />
        <Card className="p-4">
          <MechanicsList 
            mechanics={searchResults} 
            selectedMechanic={selectedMechanic}
            onMechanicSelect={setSelectedMechanic}
          />
        </Card>
      </div>
      <Card className="h-[calc(100vh-10rem)] overflow-hidden">
        <MechanicsMap
          onSearchResults={setSearchResults}
          selectedMechanic={selectedMechanic}
          onMechanicSelect={setSelectedMechanic}
        />
      </Card>
    </div>
  );
}