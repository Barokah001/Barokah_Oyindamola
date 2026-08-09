"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", label: "Home", index: "00" },
  { id: "about", label: "About", index: "01" },
  { id: "skills", label: "Skills", index: "02" },
  { id: "projects", label: "Projects", index: "03" },
  { id: "contacts", label: "Contact", index: "04" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-paper transition-shadow duration-200 ${
        scrolled ? "shadow-card border-b border-line" : "border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          onClick={() => scrollToSection("hero")}
          className="flex items-center gap-2 font-display font-semibold text-lg text-navy-950"
        >
          <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
          Barokah Oyindamola
        </button>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`group flex items-center gap-2 px-4 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id ? "text-navy-950" : "text-muted hover:text-navy-950"
                }`}
              >
                <span
                  className={`font-mono text-xs ${
                    activeSection === item.id ? "text-accent" : "text-muted group-hover:text-accent"
                  }`}
                >
                  {item.index}
                </span>
                {item.label}
              </button>
            </li>
          ))}
          <li className="ml-3">
            <a href="mailto:alimibarabarakat001@gmail.com">
              <button className="px-5 py-2.5 bg-navy-950 text-white text-sm font-medium hover:bg-navy-800 transition-colors">
                Let&rsquo;s talk
              </button>
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-navy-950"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-paper border-t border-line">
          <div className="flex flex-col px-6 py-4">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`flex items-center gap-3 py-3 text-left border-b border-line last:border-b-0 ${
                  activeSection === item.id ? "text-navy-950" : "text-muted"
                }`}
              >
                <span className="font-mono text-xs text-accent">{item.index}</span>
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            <a href="mailto:alimibarabarakat001@gmail.com" className="mt-4">
              <button className="w-full py-3 bg-navy-950 text-white text-sm font-medium">
                Let&rsquo;s talk
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;