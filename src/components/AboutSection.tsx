import {
  Award,
  Eye,
  BookOpen,
  Heart,
  Github,
  Mail,
  Linkedin,
  Briefcase,
} from "lucide-react";
import AnimatedSection from "./AnimatedSection";
import SectionHeading from "./SectionHeading";
import Founder from "../assets/team/Founder.jpeg";
import CoFounder from "../assets/team/cofounder.jpg";

const coreValues = [
  { icon: Award, title: "Quality Over Quantity", description: "We focus on delivering excellence, not volume." },
  { icon: Eye, title: "Transparency", description: "Clear communication and honest timelines, always." },
  { icon: BookOpen, title: "Continuous Learning", description: "We stay ahead with the latest technologies and practices." },
  { icon: Heart, title: "Client-First Approach", description: "Your success is our success. Period." },
];

const teamMembers = [
  {
    name: "Sumit Maurya",
    role: "Founder & Full Stack Engineer",
    image: Founder,
    about:
      "Founder of ElvoraGo, a Computer Science engineer and full-stack developer passionate about scalable architecture, performance-driven systems, and building future-ready digital products.",
    portfolio: "#",
    github: "https://github.com/sumitmaurya2",
    email: "mailto:sumit2004015@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumit-maurya-34798032a/",
  },
  {
    name: "Sumit Vishwakrma",
    role: "Co-Founder & Full Stack Engineer",
    image: CoFounder,
    about:
      "Co-Founder of ElvoraGo, a Computer Science engineer and full-stack developer with knowledge of AI tools and a focus on scalable, modern digital products.",
    portfolio: "https://sumit-vishwakarma.netlify.app/",
    github: "https://github.com/cjsumit",
    email: "mailto:vishwakarmasumit272@gmail.com",
    linkedin: "https://www.linkedin.com/in/sumit-vishwakarma272/",
  },
  {
    name: "Siddharth Verma",
    role: "UI/UX Designer",
    image: Founder,
    about:
      "UI/UX Designer at ElvoraGo specializing in user research, interaction design, and crafting visually appealing, accessible, and intuitive digital experiences.",
    portfolio: "#",
    github: "https://github.com/siddhartha0812",
    email: "mailto:siddharthaverma0810@gmail.com",
    linkedin: "https://www.linkedin.com/in/siddharthav08/",
  },
  {
    name: "Shubham Bind",
    role: "UI/UX Designer",
    image: CoFounder,
    about:
      "UI/UX Designer at ElvoraGo focused on intuitive user experiences, clean visual design, usability, and creating modern, user-centered digital interfaces.",
    portfolio: "#",
    github: "https://github.com/Shubham123-k",
    email: "mailto:shubhamkbind69@gmail.com",
    linkedin: "https://www.linkedin.com/in/shubham-bind-53305432b/",
  },
];

const AboutSection = () => {
  return (
    <section
      id="about"
      className="py-24 relative overflow-hidden transition-colors duration-500
                 bg-gradient-to-br from-stone-50 via-emerald-50/30 to-stone-100
                 dark:from-[#050a05] dark:via-[#0c140c] dark:to-[#050a05]"
    >
      <div className="absolute top-0 left-1/4 w-96 h-96
                      bg-emerald-200/20 dark:bg-emerald-900/10
                      blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96
                      bg-teal-200/20 dark:bg-teal-900/10
                      blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
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
          <AnimatedSection>
            <div className="p-8 md:p-12 rounded-3xl mb-16 text-center shadow-xl border relative overflow-hidden
                            bg-white border-stone-100 shadow-stone-200/50
                            dark:bg-white/5 dark:border-emerald-900/30 dark:shadow-none">
              <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]
                              bg-[radial-gradient(#059669_1px,transparent_1px)]
                              [background-size:16px_16px]" />

              <p className="relative text-lg md:text-2xl font-medium leading-relaxed
                            text-stone-700 dark:text-stone-200">
                We are a tech-focused startup founded by Computer Science engineers
                who are passionate about building practical, scalable, and modern
                digital solutions. With a strong foundation in engineering and
                real-world problem solving, we focus on creating products that are
                not only innovative but also reliable and easy to use.
              </p>

              <p className="relative mt-6 text-lg md:text-2xl font-medium leading-relaxed
                            text-stone-700 dark:text-stone-200">
                Our mission is to{" "}
                <span
                  className="font-bold text-transparent bg-clip-text bg-gradient-to-r
                             from-emerald-600 to-teal-500
                             dark:from-emerald-400 dark:to-teal-300"
                >
                  simplify technology
                </span>{" "}
                for businesses, startups, and students by turning complex ideas
                into intuitive, future-ready solutions. We believe great
                technology should empower growth, improve efficiency, and adapt
                seamlessly as needs evolve—helping our clients stay ahead in a
                rapidly changing digital world.
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <div className="flex gap-5 p-6 rounded-2xl border transition-all duration-300 group
                                bg-white/50 border-transparent
                                hover:bg-white hover:shadow-lg hover:shadow-emerald-100/50
                                dark:bg-white/5 dark:border-white/5
                                dark:hover:bg-emerald-950/30 dark:hover:border-emerald-900/50">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors
                                  bg-emerald-100/50 text-emerald-700
                                  dark:bg-emerald-900/20 dark:text-emerald-400
                                  group-hover:bg-emerald-600 group-hover:text-white
                                  dark:group-hover:bg-emerald-500 dark:group-hover:text-black">
                    <value.icon size={22} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1 text-stone-900 dark:text-stone-100">
                      {value.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-stone-500 dark:text-stone-400">
                      {value.description}
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          {/* TEAM SECTION */}
          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-stone-900 dark:text-stone-100 mb-3">
                Meet the Team
              </h3>
              <p className="text-stone-600 dark:text-stone-400">
                The people behind ElvoraGo.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {teamMembers.map((member, index) => (
                <AnimatedSection key={member.name} delay={index * 0.1}>
                  {/* 🔽 CHANGE MADE HERE: Card hover matches About section */}
                  <div className="relative group p-6 rounded-2xl border transition-all duration-300
                                  bg-white/60 border-transparent
                                  hover:bg-white hover:shadow-lg hover:shadow-emerald-100/50
                                  dark:bg-white/5 dark:border-white/5
                                  dark:hover:bg-emerald-950/30 dark:hover:border-emerald-900/50">
                  {/* 🔼 END CHANGE */}

                    {/* YOUTUBE-STYLE TOOLTIP */}
                    <div
                      className="absolute -top-3 left-1/2 -translate-x-1/2 -translate-y-full
                                 w-64 p-4 rounded-xl shadow-xl text-sm text-center
                                 bg-white text-stone-600
                                 dark:bg-emerald-950 dark:text-stone-300
                                 opacity-0 scale-95 pointer-events-none
                                 group-hover:opacity-100 group-hover:scale-100
                                 transition-all duration-200 z-20"
                    >
                      {member.about}
                      <div
                        className="absolute bottom-[-6px] left-1/2 -translate-x-1/2
                                   w-3 h-3 rotate-45
                                   bg-white dark:bg-emerald-950"
                      />
                    </div>

                    <div className="flex flex-col items-center">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 mb-6 rounded-full object-cover
                                   transition-transform duration-300
                                   group-hover:scale-105"
                      />

                      <h4 className="font-bold text-lg text-stone-900 dark:text-stone-100">
                        {member.name}
                      </h4>
                      <span className="text-sm text-stone-500 dark:text-stone-400">
                        {member.role}
                      </span>

                      <div className="flex mt-6 gap-4">
                        <a href={member.portfolio} className="p-2 rounded-base bg-stone-100 hover:bg-emerald-100 dark:bg-white/10 dark:hover:bg-emerald-900/40">
                          <Briefcase size={18} />
                        </a>
                        <a href={member.github} className="p-2 rounded-base bg-stone-100 hover:bg-emerald-100 dark:bg-white/10 dark:hover:bg-emerald-900/40">
                          <Github size={18} />
                        </a>
                        <a href={member.email} className="p-2 rounded-base bg-stone-100 hover:bg-emerald-100 dark:bg-white/10 dark:hover:bg-emerald-900/40">
                          <Mail size={18} />
                        </a>
                        <a href={member.linkedin} className="p-2 rounded-base bg-stone-100 hover:bg-emerald-100 dark:bg-white/10 dark:hover:bg-emerald-900/40">
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
