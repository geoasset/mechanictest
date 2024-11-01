import { 
  Wrench, 
  Battery, 
  Gauge, 
  AlertCircle, 
  Oil,
  Sparkles,
  Radio,
  ThermometerSnowflake
} from "lucide-react";
import { ServiceCard } from "./service-card";

const services = [
  {
    title: "Oil Change",
    description: "Full synthetic oil change with filter replacement and inspection",
    price: "From $49.99",
    Icon: Oil
  },
  {
    title: "Battery Service",
    description: "Battery testing, replacement, and electrical system check",
    price: "From $89.99",
    Icon: Battery
  },
  {
    title: "Brake Service",
    description: "Brake pad replacement, rotor inspection, and system testing",
    price: "From $149.99",
    Icon: Gauge
  },
  {
    title: "Diagnostic",
    description: "Complete vehicle diagnostic scan and inspection",
    price: "From $79.99",
    Icon: AlertCircle
  },
  {
    title: "Tune-Up",
    description: "Comprehensive engine tune-up and performance optimization",
    price: "From $199.99",
    Icon: Sparkles
  },
  {
    title: "Electrical",
    description: "Electrical system diagnosis and repair",
    price: "From $89.99",
    Icon: Radio
  },
  {
    title: "AC Service",
    description: "AC system check, recharge, and repair",
    price: "From $129.99",
    Icon: ThermometerSnowflake
  },
  {
    title: "General Repair",
    description: "General mechanical repairs and maintenance",
    price: "From $99.99",
    Icon: Wrench
  }
];

export function ServicesList() {
  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}