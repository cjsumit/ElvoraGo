import { Code2, DollarSign, Zap, HeartHandshake } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const mainReason = {
  icon: Code2,
  title: "Built Like a Real Product",
  description:
    "We don’t ship demos or throwaway code. Every line is written with scalability, maintainability, and real users in mind — just like an internal product team would do.",
};

const sideReasons = [
  {
    icon: DollarSign,
    title: "Founder-Friendly Pricing",
    description:
      "Our pricing is designed so budget never becomes a barrier for your startup or idea.",
  },
  {
    icon: Zap,
    title: "Fast, Focused Execution",
    description:
      "We move fast without breaking things — short cycles, clear milestones, visible progress.",
  },
  {
    icon: HeartHandshake,
    title: "Long-Term Partnership",
    description:
      "We stay after launch. Support, improvements, and guidance as you grow.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-32 relative bg-secondary/60 overflow-hidden">
      {/* decorative vertical line */}
      <div className="absolute left-1/2 top-[40%] h-[60%] w-px bg-border hidden lg:block" />

      <div className="container mx-auto px-4 relative z-10">
        <SectionHeading
          badge="Why Us"
          title="What Makes Us Different"
          subtitle="Designed for founders who care about quality, speed, and trust."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* LEFT — MAIN SPOTLIGHT */}
          <AnimatedSection>
            <div className="relative p-10 rounded-3xl bg-secondary/40 border">
              <div className="w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-6">
                <mainReason.icon size={26} className="text-primary" />
              </div>

              <h3 className="text-2xl font-semibold text-foreground mb-4">
                {mainReason.title}
              </h3>

              <p className="text-muted-foreground text-lg leading-relaxed">
                {mainReason.description}
              </p>

              {/* subtle glow */}
              <div className="absolute -bottom-20 -right-20 w-48 h-48 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
            </div>
          </AnimatedSection>

          {/* RIGHT — SIDE RAIL */}
          <div className="space-y-10">
            {sideReasons.map((reason, index) => (
              <AnimatedSection key={reason.title} delay={index * 0.1}>
                <div className="flex gap-5">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <reason.icon size={20} className="text-primary" />
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-1">
                      {reason.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
