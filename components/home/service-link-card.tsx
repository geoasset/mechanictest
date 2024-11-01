import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface ServiceLinkCardProps {
  Icon: LucideIcon;
  name: string;
}

export function ServiceLinkCard({ Icon, name }: ServiceLinkCardProps) {
  return (
    <Card className="flex items-center justify-between p-4">
      <div className="flex items-center space-x-4">
        <Icon className="h-5 w-5" />
        <span>{name}</span>
      </div>
      <ArrowRight className="h-5 w-5" />
    </Card>
  );
}