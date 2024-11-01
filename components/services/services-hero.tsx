import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ServicesHero() {
  return (
    <section className="relative">
      <div className="container flex flex-col items-center justify-center space-y-4 py-24 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Services
        </h1>
        <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Professional auto repair services delivered right to your doorstep
        </p>
        <Button size="lg" asChild>
          <Link href="/search">Find a Mechanic</Link>
        </Button>
      </div>
    </section>
  );
}