import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import yellowish from "../assets/yellowish.jpg";

const HeroSection = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen bg-background flex items-start"
    >
      {/* IMPORTANT: mobile spacing fixed */}
      <div className="container mx-auto px-4 pt-20 sm:pt-24 md:pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="text-sm font-medium tracking-wide text-primary mb-5"
            >
              FOR STARTUPS • BUSINESSES • STUDENTS
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold leading-tight text-foreground mb-6"
            >
              We Build Technology <br />
              That Actually Ships.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-muted-foreground mb-8"
            >
              Websites, scalable backends, and practical AI solutions — built
              with clean code, fair pricing, and long-term support.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={() => scrollTo("#contact")}>
                Start a Project
                <ArrowRight size={18} />
              </Button>

              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#services")}
              >
                See What We Do
              </Button>
            </motion.div>
          </div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full"
          >
            <div className="relative rounded-3xl transition-transform duration-500 hover:scale-105 overflow-hidden border shadow-2xl h-[80vh]">
  <img
    src={yellowish}
    alt="Tech solutions illustration"
    className="w-full h-full object-cover"
  />
</div>


            {/* subtle accent */}
            <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
