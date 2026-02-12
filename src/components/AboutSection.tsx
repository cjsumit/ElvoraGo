import { Award, Eye, BookOpen, Heart } from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";

const coreValues = [
  { 
    icon: Award, 
    title: "Quality Over Quantity", 
    description: "We focus on delivering excellence, not volume." 
  },
  { 
    icon: Eye, 
    title: "Transparency", 
    description: "Clear communication and honest timelines, always." 
  },
  { 
    icon: BookOpen, 
    title: "Continuous Learning", 
    description: "We stay ahead with the latest technologies and practices." 
  },
  { 
    icon: Heart, 
    title: "Client-First Approach", 
    description: "Your success is our success. Period." 
  },
];

const AboutSection = () => {
  return (
    <section 
      id="about" 
      // UNIQUE THEME BACKGROUND:
      // Light: Warm Stone/Emerald gradient
      // Dark: Deepest Green/Black gradient
      className="py-24 relative overflow-hidden transition-colors duration-500
                 bg-gradient-to-br from-stone-50 via-emerald-50/30 to-stone-100
                 dark:from-[#050a05] dark:via-[#0c140c] dark:to-[#050a05]"
    >
      
      {/* BACKGROUND ACCENTS: Earthy Blurs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 
                      bg-emerald-200/20 dark:bg-emerald-900/10 
                      blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 
                      bg-teal-200/20 dark:bg-teal-900/10 
                      blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Custom Heading Wrapper to enforce theme colors */}
        <div className="mb-16 text-center">
            <span className="inline-block py-1 px-3 rounded-full 
                             bg-emerald-100 text-emerald-800 
                             dark:bg-emerald-900/40 dark:text-emerald-300 
                             text-xs font-bold tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-stone-900 dark:text-stone-100">
              Who We Are
            </h2>
            <p className="text-lg text-stone-600 dark:text-stone-400">
              A passionate team of engineers building the future of digital.
            </p>
        </div>

        <div className="max-w-4xl mx-auto">
          
          {/* FEATURED MISSION BOX */}
          <AnimatedSection>
            <div className="p-8 md:p-12 rounded-3xl mb-16 text-center shadow-xl border relative overflow-hidden
                            bg-white border-stone-100 shadow-stone-200/50
                            dark:bg-white/5 dark:border-emerald-900/30 dark:shadow-none">
              
              {/* Subtle pattern overlay */}
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] bg-[radial-gradient(#059669_1px,transparent_1px)] [background-size:16px_16px]" />

              <p className="relative text-lg md:text-2xl font-medium leading-relaxed
                            text-stone-700 dark:text-stone-200">
                We are a tech-focused startup founded by Computer Science engineers with a passion for building practical, scalable, and modern digital solutions. Our mission is to{" "}
                <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r 
                                 from-emerald-600 to-teal-500
                                 dark:from-emerald-400 dark:to-teal-300">
                  simplify technology
                </span>{" "}
                for businesses, startups, and students by delivering reliable and future-ready products.
              </p>
            </div>
          </AnimatedSection>

          {/* VALUES GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl border transition-all duration-300 group
                                bg-white/50 border-transparent hover:bg-white hover:shadow-lg hover:shadow-emerald-100/50
                                dark:bg-white/5 dark:border-white/5 dark:hover:bg-emerald-950/30 dark:hover:border-emerald-900/50">
                  
                  {/* ICON */}
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors
                                  bg-emerald-100/50 text-emerald-700
                                  dark:bg-emerald-900/20 dark:text-emerald-400
                                  group-hover:bg-emerald-600 group-hover:text-white
                                  dark:group-hover:bg-emerald-500 dark:group-hover:text-black">
                    <value.icon size={22} />
                  </div>
                  
                  {/* TEXT */}
                  <div>
                    <h3 className="font-bold text-lg mb-1
                                   text-stone-900 dark:text-stone-100">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed
                                  text-stone-500 dark:text-stone-400">
                      {value.description}
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

export default AboutSection;