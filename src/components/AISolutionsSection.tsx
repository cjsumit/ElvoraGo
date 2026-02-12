import {
  Bot,
  MessageSquare,
  FileSearch,
  Pen,
  HelpCircle,
  Briefcase,
  Rocket,
  BookOpen,
  Building,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

// Data arrays remain the same, just rendering logic changes below
const aiServices = [
  {
    icon: Bot,
    title: "AI Chatbots for Websites",
    desc: "Custom-trained chatbots that understand your product and users.",
  },
  {
    icon: MessageSquare,
    title: "Customer Support Automation",
    desc: "Reduce response time and support costs using AI workflows.",
  },
  {
    icon: FileSearch,
    title: "Resume & Profile Analysis",
    desc: "Smart screening tools for hiring platforms and HR teams.",
  },
  {
    icon: Pen,
    title: "AI-Powered Content Tools",
    desc: "Generate, rewrite, and optimize content at scale.",
  },
  {
    icon: HelpCircle,
    title: "Smart FAQ & Helpdesk Systems",
    desc: "AI-powered helpdesks that learn from customer queries.",
  },
];

const useCases = [
  { icon: Building, label: "Business Websites" },
  { icon: Rocket, label: "Startups" },
  { icon: BookOpen, label: "EdTech Platforms" },
  { icon: Briefcase, label: "Service Companies" },
];

const AISolutionsSection = () => {
  return (
    <section 
      id="ai" 
      // UNIQUE THEME BACKGROUND:
      // Light: Soft Lavender/White vertical gradient
      // Dark: Deep Violet/Black vertical gradient
      className="py-28 relative overflow-hidden transition-colors duration-500
                 bg-gradient-to-b from-white via-purple-50/50 to-white
                 dark:from-[#050505] dark:via-[#130b1a] dark:to-[#050505]"
    >
      
      {/* BACKGROUND ACCENTS: Glowing Orbs */}
      {/* Top Right - Violet Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] 
                      bg-purple-200/30 dark:bg-purple-900/20 
                      blur-[100px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      
      {/* Bottom Left - Fuchsia Glow */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] 
                      bg-fuchsia-100/40 dark:bg-fuchsia-900/10 
                      blur-[80px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Pass custom classes to your SectionHeading if it supports it, 
            otherwise wrap it or ensure it inherits text colors */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs font-bold tracking-wider uppercase mb-4">
            AI Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900 dark:text-white">
            Practical AI, Built for Real Products
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-300">
             We don’t add AI for hype. We integrate it where it saves time, reduces cost, and improves user experience.
          </p>
        </div>

        {/* SPLIT LAYOUT */}
        <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
          
          {/* LEFT — SERVICES LIST */}
          <div className="space-y-8">
            {aiServices.map((service, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <div className="group flex gap-5 p-4 rounded-2xl transition-all duration-300 hover:bg-white/60 dark:hover:bg-white/5">
                  {/* ICON BOX: Violet theme */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm
                                  bg-purple-100 text-purple-600
                                  dark:bg-purple-900/40 dark:text-purple-300
                                  group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={22} />
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-1 
                                   text-slate-900 dark:text-slate-100
                                   group-hover:text-purple-700 dark:group-hover:text-purple-300 transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-sm max-w-md leading-relaxed
                                  text-slate-600 dark:text-slate-400">
                      {service.desc}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* RIGHT — CONTEXT BLOCK (Sticky Card) */}
          <div className="lg:sticky lg:top-24">
            <AnimatedSection delay={0.2}>
              <div className="relative overflow-hidden border rounded-3xl p-8 shadow-2xl
                              bg-white/80 border-purple-100 shadow-purple-100/50
                              dark:bg-slate-900/80 dark:border-purple-900/30 dark:shadow-purple-900/10
                              backdrop-blur-xl">
                
                {/* Card Content */}
                <h3 className="text-xl font-semibold mb-4
                               text-slate-900 dark:text-white">
                  Where These AI Solutions Work Best
                </h3>

                <p className="mb-8 leading-relaxed
                              text-slate-600 dark:text-slate-300">
                  Our AI solutions are designed for real-world use cases — not demos.
                  They integrate smoothly with your existing systems and scale as you grow.
                </p>

                <div className="flex flex-wrap gap-3">
                  {useCases.map((uc) => (
                    <div
                      key={uc.label}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium border transition-colors
                                 bg-purple-50/50 border-purple-100 text-purple-900
                                 dark:bg-purple-900/20 dark:border-purple-800/50 dark:text-purple-200"
                    >
                      <uc.icon size={16} className="text-purple-600 dark:text-purple-400" />
                      {uc.label}
                    </div>
                  ))}
                </div>

                {/* Decorative Elements inside card */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 
                                bg-purple-500/10 dark:bg-purple-500/20 
                                rounded-full blur-2xl pointer-events-none" />
              </div>
              
              {/* Optional: "Call to Action" hint below the card */}
              <div className="mt-8 p-4 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5">
                 <p className="text-xs text-center text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                    AI Integration Timeline: ~2-4 Weeks
                 </p>
              </div>

            </AnimatedSection>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AISolutionsSection;