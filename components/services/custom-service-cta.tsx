import { Button } from "@/components/ui/button";
import Link from "next/link";

export function CustomServiceCTA() {
  return (
    <div className="mt-12 rounded-lg bg-muted p-8 text-center">
      <h2 className="text-2xl font-bold">Need a Custom Service?</h2>
      <p className="mt-2 text-muted-foreground">
        Contact us for specialized repairs and maintenance needs
      </p>
      <Button size="lg" className="mt-6" asChild>
        <Link href="/contact">Contact Us</Link>
      </Button>
    </div>
  );
}