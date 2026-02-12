import { Globe, Server, Brain, GraduationCap, Lightbulb } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const offerings = [
  {
    icon: Globe,
    title: "Web & App Development",
    description: "Fast, responsive, and modern websites tailored to your business.",
    accent: "from-blue-500/15 to-transparent",
    border: "border-blue-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Server,
    title: "Backend & API Solutions",
    description: "Secure, scalable backend systems powering your applications.",
    accent: "from-purple-500/15 to-transparent",
    border: "border-purple-500/20",
    iconColor: "text-purple-500",
  },
  {
    icon: Brain,
    title: "AI-Powered Tools",
    description: "Smart AI integrations to automate and enhance your products.",
    accent: "from-cyan-500/15 to-transparent",
    border: "border-cyan-500/20",
    iconColor: "text-cyan-500",
  },
  {
    icon: GraduationCap,
    title: "Student Projects & Portfolios",
    description: "Professional portfolios and projects for placements and careers.",
    accent: "from-emerald-500/15 to-transparent",
    border: "border-emerald-500/20",
    iconColor: "text-emerald-500",
  },
  {
    icon: Lightbulb,
    title: "Startup Consulting",
    description: "From idea validation to MVP planning, we guide your journey.",
    accent: "from-amber-500/15 to-transparent",
    border: "border-amber-500/25",
    iconColor: "text-amber-500",
  },
];

const WhatWeOfferSection = () => {
  return (
    <section className="py-28 bg-secondary/40">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="What We Offer"
          title="Solutions That Drive Growth"
          subtitle="Modern tech, practical execution, and pricing that doesn’t block your journey."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {offerings.map((offer, index) => (
            <AnimatedSection key={offer.title} delay={index * 0.08}>
              <div
                className={`relative group p-8 rounded-3xl bg-background border ${offer.border}
                transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full overflow-hidden`}
              >
                {/* accent glow */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${offer.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />

                {/* content */}
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 rounded-xl border ${offer.border} flex items-center justify-center mb-6`}
                  >
                    <offer.icon className={offer.iconColor} size={24} />
                  </div>

                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {offer.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed">
                    {offer.description}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOfferSection;
