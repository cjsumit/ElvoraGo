import { Github, Linkedin, Twitter, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer 
      // THEME: Always dark to ground the design
      // Light Mode: Deep Slate (Oxford Blue)
      // Dark Mode: Pure Black
      className="relative py-16 overflow-hidden
                 bg-slate-900 dark:bg-[#020202]
                 text-slate-300 dark:text-slate-400
                 transition-colors duration-500"
    >
      
      {/* BACKGROUND ACCENTS */}
      {/* A subtle top border gradient to separate from the previous section */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50" />
      
      {/* Background glow for depth */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-indigo-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-800/20 dark:bg-slate-800/10 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold font-heading text-white tracking-tight flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white text-lg">
                V
              </div>
              Vision<span className="text-indigo-500">.</span>
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Smart Web, Backend & AI Solutions for Businesses and Students. Turning ideas into scalable digital products.
            </p>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold text-white tracking-wide mb-6">Quick Links</h4>
            <div className="grid grid-cols-2 gap-y-3 gap-x-8">
              {[
                { label: "Home", href: "#home" },
                { label: "Services", href: "#services" },
                { label: "AI Solutions", href: "#ai" },
                { label: "Students", href: "#students" },
                { label: "Consulting", href: "#consulting" },
                { label: "About", href: "#about" },
                { label: "Contact", href: "#contact" },
              ].map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                  className="text-sm transition-all duration-200 hover:translate-x-1
                             text-slate-400 hover:text-indigo-400"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="font-semibold text-white tracking-wide mb-6">Connect With Us</h4>
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
                             bg-slate-800 text-slate-400 hover:bg-indigo-600 hover:text-white hover:shadow-lg hover:shadow-indigo-500/30
                             dark:bg-slate-900"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
            
            {/* Optional 'Back to Top' for UX */}
            <button 
                onClick={() => scrollTo("#home")}
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500 hover:text-indigo-400 transition-colors"
            >
                Back to Top <ArrowUp size={14} />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 dark:border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-slate-500">
            © {currentYear} Vision Technologies. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-500">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;