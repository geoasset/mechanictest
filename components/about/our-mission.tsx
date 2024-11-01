import { Card } from "@/components/ui/card";

export function OurMission() {
  return (
    <section className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">Our Mission</h2>
          <Card className="mt-8 p-6 md:p-8">
            <p className="text-lg leading-relaxed">
              Our mission is to revolutionize the automotive repair industry by bringing expert mechanics directly to our customers. We believe in making car repairs convenient, transparent, and stress-free, while maintaining the highest standards of quality and professionalism.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}