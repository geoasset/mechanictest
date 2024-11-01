import Image from "next/image";
import { Card } from "@/components/ui/card";

export function TeamSection() {
  const team = [
    {
      name: "Michael Chen",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&h=300",
      bio: "20+ years in automotive industry",
    },
    {
      name: "Sarah Martinez",
      role: "Head of Operations",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=300",
      bio: "Former Tesla operations manager",
    },
    {
      name: "David Thompson",
      role: "Lead Mechanic",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=300",
      bio: "ASE Master Certified Technician",
    },
  ];

  return (
    <section className="border-t bg-muted/40 py-12 md:py-16">
      <div className="container">
        <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
          Meet Our Leadership Team
        </h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <Card key={member.name} className="overflow-hidden">
              <div className="aspect-square relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="mt-2 text-sm text-muted-foreground">{member.bio}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}