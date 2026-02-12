navbar
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "AI Solutions", href: "#ai" },
  { label: "Students", href: "#students" },
  { label: "Consulting", href: "#consulting" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-secondary/80 backdrop-blur-lg border-b border-border"
          : "bg-transparent"
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
          className="text-xl md:text-2xl font-bold tracking-tight text-foreground"
        >
          <span className="text-primary">Tech</span>Starter
        </a>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleClick(link.href)}
              className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
              {/* underline */}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all group-hover:w-full" />
            </button>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden lg:block">
          <Button
            size="sm"
            className="bg-primary text-primary-foreground hover:bg-primary/90"
            onClick={() => handleClick("#contact")}
          >
            Free Consultation
          </Button>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors"
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-label="Toggle menu"
        >
          {isMobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMobileOpen && (
        <div className="lg:hidden bg-secondary/95 backdrop-blur-xl border-b border-border">
          <div className="container mx-auto px-4 py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleClick(link.href)}
                className="text-left px-4 py-3 rounded-lg text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
              >
                {link.label}
              </button>
            ))}

            <Button
              className="mt-3 bg-primary text-primary-foreground"
              onClick={() => handleClick("#contact")}
            >
              Get Free Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;