import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function MechanicsFilters() {
  return (
    <Card className="p-6">
      <div className="space-y-6">
        <div className="space-y-2">
          <h3 className="font-semibold">Distance</h3>
          <Slider
            defaultValue={[10]}
            max={50}
            step={1}
            className="w-full"
          />
          <div className="text-sm text-muted-foreground">
            Within 10 miles
          </div>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Availability</h3>
          <RadioGroup defaultValue="all">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="all" />
              <Label htmlFor="all">All Mechanics</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="available" id="available" />
              <Label htmlFor="available">Available Now</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="emergency" id="emergency" />
              <Label htmlFor="emergency">Emergency Service</Label>
            </div>
          </RadioGroup>
        </div>

        <div className="space-y-2">
          <h3 className="font-semibold">Sort By</h3>
          <Select defaultValue="rating">
            <SelectTrigger>
              <SelectValue placeholder="Select sorting" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="rating">Highest Rated</SelectItem>
              <SelectItem value="distance">Nearest</SelectItem>
              <SelectItem value="price">Lowest Price</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </Card>
  );
}