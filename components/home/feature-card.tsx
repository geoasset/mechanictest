import { LucideIcon } from "lucide-react";
import { Card } from "@/components/ui/card";

interface FeatureCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ Icon, title, description }: FeatureCardProps) {
  return (
    <Card className="p-6">
      <Icon className="h-12 w-12 text-primary" />
      <h3 className="mt-4 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
    </Card>
  );
}