import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Clock, Phone } from "lucide-react";

interface MechanicsListProps {
  mechanics: any[];
  selectedMechanic: any;
  onMechanicSelect: (mechanic: any) => void;
}

export function MechanicsList({
  mechanics,
  selectedMechanic,
  onMechanicSelect,
}: MechanicsListProps) {
  if (!mechanics.length) {
    return (
      <div className="p-4 text-center text-muted-foreground">
        Search for mechanics in your area to see results
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {mechanics.map((mechanic) => (
        <Card
          key={mechanic.place_id}
          className={`p-4 transition-colors hover:bg-muted/50 ${
            selectedMechanic?.place_id === mechanic.place_id
              ? "border-primary"
              : ""
          }`}
          onClick={() => onMechanicSelect(mechanic)}
        >
          <div className="space-y-2">
            <div className="flex items-start justify-between">
              <h3 className="font-semibold">{mechanic.name}</h3>
              <div className="flex items-center space-x-1">
                <Star className="h-4 w-4 fill-primary text-primary" />
                <span className="text-sm">
                  {mechanic.rating} ({mechanic.user_ratings_total})
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>{mechanic.formatted_address}</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>
                {mechanic.opening_hours?.open_now ? "Open now" : "Closed"}
              </span>
            </div>
            {mechanic.formatted_phone_number && (
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>{mechanic.formatted_phone_number}</span>
              </div>
            )}
            <Button className="w-full" variant="secondary">
              View Profile
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
}