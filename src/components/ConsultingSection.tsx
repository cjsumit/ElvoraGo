import { Lightbulb, Target, Layers, ListChecks, Calculator, Rocket, User, Building } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const consultingServices = [
  { 
    icon: Lightbulb, 
    title: "Idea Validation", 
    description: "Test your concept before investing resources." 
  },
  { 
    icon: Target, 
    title: "MVP Planning", 
    description: "Define the minimum viable product to launch fast." 
  },
  { 
    icon: Layers, 
    title: "Tech Stack Selection", 
    description: "Choose the right tools for your scale and budget." 
  },
  { 
    icon: ListChecks, 
    title: "Feature Breakdown", 
    description: "Prioritize features that matter most to users." 
  },
  { 
    icon: Calculator, 
    title: "Cost Estimation", 
    description: "Get a realistic development cost breakdown." 
  },
];

const whoFor = [
  { icon: Rocket, label: "Startup Founders" },
  { icon: User, label: "Non-Tech Entrepreneurs" },
  { icon: Building, label: "Early-Stage Startups" },
];

const ConsultingSection = () => {
  return (
    <section 
      id="consulting" 
      // UNIQUE THEME BACKGROUND:
      // Light: Warm Orange/Sand Gradient
      // Dark: Deep Carbon/Warm Black Gradient
      className="py-24 relative overflow-hidden transition-colors duration-500
                 bg-gradient-to-tr from-orange-50 via-white to-amber-50
                 dark:from-[#0c0a09] dark:via-[#1c1917] dark:to-[#0c0a09]"
    >
      
      {/* BACKGROUND TEXTURE: Dot Pattern for "Structural/Engineering" feel */}
      <div className="absolute inset-0 opacity-[0.4] dark:opacity-[0.1]" 
           style={{ backgroundImage: 'radial-gradient(#f97316 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}>
      </div>

      {/* BACKGROUND GLOW: Bottom Center */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] 
                      bg-orange-200/40 dark:bg-orange-900/20 
                      blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header styling */}
        <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block py-1 px-3 rounded-full 
                             bg-orange-100 text-orange-700 
                             dark:bg-orange-900/30 dark:text-orange-300 
                             text-xs font-bold tracking-wider uppercase mb-4">
              Consulting
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100">
              Startup & Tech Consulting
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400">
              Have an idea but don't know how to build it? We help you transform your idea into a clear technical roadmap.
            </p>
        </div>

        <div className="max-w-5xl mx-auto">
          
          {/* CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
            {consultingServices.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="group relative h-full p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1
                                bg-white border-orange-100/50 shadow-xl shadow-orange-100/20
                                dark:bg-stone-900 dark:border-stone-800 dark:shadow-none
                                hover:border-orange-300 dark:hover:border-orange-700/50">
                  
                  {/* Subtle Gradient Overlay on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none dark:from-orange-900/10" />

                  {/* Icon */}
                  <div className="relative w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-colors
                                  bg-orange-100 text-orange-600
                                  dark:bg-orange-900/20 dark:text-orange-400
                                  group-hover:bg-orange-500 group-hover:text-white
                                  dark:group-hover:bg-orange-600">
                    <item.icon size={22} />
                  </div>
                  
                  {/* Content */}
                  <div className="relative">
                    <h3 className="font-semibold text-lg mb-2 text-stone-900 dark:text-stone-100">
                        {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                        {item.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            {/* CTA CARD (Filling the last spot if needed, or just visual balance) */}
            <div className="hidden lg:flex items-center justify-center p-6 rounded-2xl border border-dashed border-orange-200 dark:border-stone-800 bg-orange-50/30 dark:bg-stone-900/30">
                <p className="text-center text-sm font-medium text-orange-800 dark:text-orange-200">
                    Ready to build? <br/> Let's map it out.
                </p>
            </div>
          </div>

          {/* "WHO THIS IS FOR" SECTION */}
          <AnimatedSection>
            <div className="relative text-center p-8 rounded-3xl border
                            bg-white/60 border-orange-100/50 backdrop-blur-sm
                            dark:bg-stone-900/60 dark:border-stone-800">
              
              <h3 className="text-lg font-semibold mb-6 text-stone-900 dark:text-stone-100">
                Who This Is For
              </h3>
              
              <div className="flex flex-wrap justify-center gap-4">
                {whoFor.map((item) => (
                  <div
                    key={item.label}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border text-sm font-medium transition-colors
                               bg-white border-stone-200 text-stone-600 shadow-sm
                               dark:bg-stone-950 dark:border-stone-800 dark:text-stone-300
                               hover:border-orange-300 hover:text-orange-700
                               dark:hover:border-orange-700 dark:hover:text-orange-400"
                  >
                    <item.icon size={16} className="text-orange-500" />
                    {item.label}
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

        </div>
      </div>
    </section>
  );
};

export default ConsultingSection;