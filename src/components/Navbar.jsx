"use client";

import { useEffect, useState } from "react";
import Button from "./Button";
import { FaBars, FaWindowClose } from "react-icons/fa";
import { Menu } from "lucide-react";


// Navbar Component
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-4' : 'bg-white/10 backdrop-blur-md py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <h2 className={`font-bold text-2xl transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
          Barokah<span className="text-purple-600">.</span>
        </h2>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {[
            { id: "hero", label: "Home" },
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "contacts", label: "Contact" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`font-medium transition-colors ${
                  activeSection === item.id 
                    ? 'text-purple-600' 
                    : scrolled ? 'text-gray-700 hover:text-purple-600' : 'text-white hover:text-purple-300'
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <a href="mailto:alimibarabarakat001@gmail.com">
            <button className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Let's Talk
            </button>
          </a>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden ${scrolled ? 'text-gray-900' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu size={28} />
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg">
          <div className="flex flex-col p-6 space-y-4">
            {[
              { id: "hero", label: "Home" },
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "contacts", label: "Contact" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left font-medium py-2 ${
                  activeSection === item.id ? 'text-purple-600' : 'text-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a href="mailto:alimibarabarakat001@gmail.com">
              <button className="w-full px-6 py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-medium">
                Let's Talk
              </button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
