import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Sun, Moon } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#ai" },
  { label: "Students", href: "#students" },
  { label: "Consulting", href: "#consulting" },
  { label: "About", href: "#about" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  // Handle Scroll Effect
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // FORCE LIGHT MODE BY DEFAULT
  useEffect(() => {
    // Sirf tabhi Dark Mode on karein agar user ne PEHLE kabhi 'dark' set kiya tha.
    // System settings (laptop dark mode) ko ignore kar diya gaya hai.
    if (localStorage.theme === 'dark') {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    } else {
      // By Default: Light Mode
      setTheme('light');
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      localStorage.theme = 'dark';
      document.documentElement.classList.add("dark");
    } else {
      setTheme("light");
      localStorage.theme = 'light';
      document.documentElement.classList.remove("dark");
    }
  };

  const handleClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between h-16 md:h-20 px-4">
        
        {/* LOGO */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleClick("#home");
          }}
          className="flex items-center gap-2 group"
        >
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-xl transition-transform group-hover:scale-110">
            V
          </div>
          <span className="text-xl md:text-2xl font-bold tracking-tight text-slate-900 dark:text-white">
            Vision<span className="text-indigo-600">.</span>
          </span>
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="relative text-sm font-medium transition-colors 
                         text-slate-600 hover:text-indigo-600
                         dark:text-slate-300 dark:hover:text-white"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden lg:flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full transition-colors
                       text-slate-600 hover:bg-slate-100
                       dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Toggle Dark Mode"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>

          {/* CTA Button */}
          <Button
            size="sm"
            className="font-semibold transition-all
                       bg-slate-900 text-white hover:bg-slate-800
                       dark:bg-white dark:text-slate-900 dark:hover:bg-indigo-50"
            onClick={() => handleClick("#contact")}
          >
            Free Consultation
          </Button>
        </div>

        {/* MOBILE CONTROLS */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300"
          >
            {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
          </button>
          
          <button
            className="p-2 rounded-md transition-colors text-slate-900 dark:text-white"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle menu"
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 border-b border-slate-200 dark:border-slate-800 shadow-xl
                        bg-white/95 dark:bg-slate-950/95 backdrop-blur-xl">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left px-4 py-3 rounded-lg transition-colors font-medium
                           text-slate-600 hover:bg-slate-50 hover:text-indigo-600
                           dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              >
                {link.label}
              </button>
            ))}

            <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
                <Button
                className="w-full font-semibold
                           bg-indigo-600 text-white hover:bg-indigo-700"
                onClick={() => handleClick("#contact")}
                >
                Get Free Consultation
                </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;