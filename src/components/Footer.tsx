import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";
import logo from "../assets/logo1.png";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      // LIGHT MODE: Premium Charcoal Black (#121212)
      // DARK MODE: Pure Black (#020202)
      className="relative py-16 overflow-hidden transition-colors duration-500
                 bg-[#121212] text-zinc-400
                 dark:bg-[#020202] dark:text-slate-400"
    >
      
      {/* BACKGROUND ACCENTS */}
      {/* Top Border Gradient: Silver for Light Mode, Indigo for Dark Mode */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-zinc-600 dark:via-indigo-500 to-transparent opacity-50" />
      
      {/* Background glow for depth */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full blur-[100px] pointer-events-none transition-colors duration-500
                      bg-zinc-800/30 dark:bg-indigo-900/20" />
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[80px] pointer-events-none transition-colors duration-500
                      bg-zinc-700/10 dark:bg-slate-800/10" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading tracking-tight flex items-center gap-2 transition-colors duration-500
                           text-white dark:text-white">
                        <div
            className="w-8 h-8 rounded-lg flex items-center justify-center 
                      transition-colors duration-500 
                      p-1"
          >
            <img
              src={logo}
              alt="Logo"
              className="w-full h-full object-contain"
            />
          </div>
                            <span>
                Elvora
                <span className="text-zinc-500 dark:text-indigo-500">Go</span>
              </span>

            </h3>
            <p className="text-sm leading-relaxed max-w-xs transition-colors duration-500
                          text-zinc-400 dark:text-slate-400">
              Smart Web, Backend & AI Solutions for Businesses and Students. Turning ideas into scalable digital products.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold tracking-wide mb-6 transition-colors duration-500
                           text-white dark:text-white">
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "AI Solutions", href: "#ai" },
                { label: "Students", href: "#students" },
                { label: "Consulting", href: "#consulting" },
                { label: "About", href: "/about" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                          if (link.href.startsWith("#")) {
                            e.preventDefault();  
                            scrollTo(link.href);
                          }}}
                  className="text-sm font-medium transition-all duration-200 hover:translate-x-1
                             text-zinc-400 hover:text-white 
                             dark:text-slate-400 dark:hover:text-indigo-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold tracking-wide mb-6 transition-colors duration-500
                           text-white dark:text-white">
              Connect With Us
            </h4>
            <div className="flex gap-4 mb-6">
              {[
                { icon: Github, href: "#", label: "GitHub" },
                { icon: Linkedin, href: "#", label: "LinkedIn" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Mail, href: "mailto:hello@vision.com", label: "Email" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300
                             bg-zinc-800/50 border border-zinc-700/50 text-zinc-400 hover:bg-white hover:text-black hover:border-transparent hover:scale-105
                             dark:bg-slate-900 dark:border-transparent dark:text-slate-400 dark:hover:bg-indigo-600 dark:hover:text-white dark:hover:scale-100"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            {/* 'Back to Top' for UX */}
            <button 
                onClick={() => scrollTo("#home")}
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider transition-colors duration-300 group
                           text-zinc-500 hover:text-white 
                           dark:text-slate-500 dark:hover:text-indigo-400"
            >
                Back to Top <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left transition-colors duration-500
                        border-zinc-800 dark:border-slate-900">
          <p className="text-sm font-medium transition-colors duration-500
                        text-zinc-500 dark:text-slate-600">
            © {currentYear} Vision Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm font-medium transition-colors duration-500
                          text-zinc-500 dark:text-slate-600">
            <a href="#" className="hover:text-zinc-300 dark:hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 dark:hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;