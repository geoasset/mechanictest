import { Check } from "lucide-react";

export function Requirements() {
  const requirements = [
    "Valid ASE Certification",
    "Minimum 3 years of professional experience",
    "Own tools and reliable transportation",
    "Clean background check",
    "Valid driver's license and insurance",
    "Strong customer service skills",
    "Smartphone with reliable internet connection",
    "Ability to pass technical assessment",
  ];

  return (
    <section className="py-12 md:py-16">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-center text-2xl font-bold tracking-tight md:text-3xl">
            Requirements
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {requirements.map((requirement) => (
              <div
                key={requirement}
                className="flex items-center space-x-3 rounded-lg border bg-card p-4"
              >
                <Check className="h-5 w-5 text-primary" />
                <span>{requirement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}