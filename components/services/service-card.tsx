import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  Icon: LucideIcon;
}

export function ServiceCard({ title, description, price, Icon }: ServiceCardProps) {
  return (
    <Card className="flex flex-col p-6">
      <div className="mb-4">
        <Icon className="h-12 w-12 text-primary" />
      </div>
      <h3 className="mb-2 text-xl font-semibold">{title}</h3>
      <p className="mb-4 flex-1 text-muted-foreground">{description}</p>
      <div className="mt-auto">
        <div className="mb-4 text-2xl font-bold">{price}</div>
        <Button className="w-full">Book Now</Button>
      </div>
    </Card>
  );
}