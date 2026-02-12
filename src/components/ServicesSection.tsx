import { Globe, Server, ShieldCheck, Database, Layout, ShoppingCart, Lock, Plug } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const services = [
  {
    title: "Web & App Development",
    description:
      "We design and develop fast, responsive, and modern websites and web applications tailored to your business needs. Whether you need a company website, admin dashboard, or a full-fledged web app, we deliver scalable and secure solutions.",
    features: [
      "Business & portfolio websites",
      "Admin dashboards",
      "E-commerce websites",
      "Landing pages",
      "Single Page Applications (SPA)",
    ],
    techStack: "React, Tailwind CSS, Node.js, Express, MongoDB",
    icon: Globe,
    accentClass: "gradient-primary",
  },
  {
    title: "Backend & API Development",
    description:
      "A strong backend is the backbone of any digital product. We build secure, scalable, and high-performance backend systems that power your applications and handle real-world traffic with ease.",
    features: [
      "REST API development",
      "Authentication & authorization (JWT, role-based)",
      "Database design & optimization",
      "Third-party API integrations",
      "Admin & user management systems",
    ],
    techStack: "Node.js, Express, PostgreSQL, MongoDB, Redis",
    icon: Server,
    accentClass: "gradient-accent",
  },
];

const iconMap = [Layout, ShoppingCart, Globe, Database, Lock, ShieldCheck, Plug, Server];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <SectionHeading
          badge="Our Services"
          title="What We Build"
          subtitle="Professional development services powered by modern technology and delivered with care."
        />

        <div className="space-y-16 max-w-5xl mx-auto">
          {services.map((service, sIdx) => (
            <AnimatedSection key={service.title} delay={sIdx * 0.15}>
              <div className="flex flex-col lg:flex-row gap-8 p-8 md:p-10 rounded-3xl bg-card border border-border shadow-card">
                {/* Icon & Title */}
                <div className="lg:w-2/5">
                  <div className={`w-16 h-16 rounded-2xl ${service.accentClass} flex items-center justify-center mb-5`}>
                    <service.icon className="text-primary-foreground" size={28} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                  <div className="mt-4 inline-block px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground text-xs font-medium">
                    {service.techStack}
                  </div>
                </div>

                {/* Features */}
                <div className="lg:w-3/5">
                  <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    Includes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature, fIdx) => {
                      const Icon = iconMap[(sIdx * 5 + fIdx) % iconMap.length];
                      return (
                        <div
                          key={feature}
                          className="flex items-center gap-3 p-3 rounded-xl bg-secondary/50 hover:bg-secondary transition-colors"
                        >
                          <Icon size={18} className="text-primary flex-shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
