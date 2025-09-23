"use client";

import { useState } from "react";


const Navbar = () => {
const [activeSection, setActiveSection] = useState("about");

const scrollToSection = (sectionId = "") => {
  setActiveSection(sectionId);
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <ul className="flex justify-center space-x-8">
          {[
            { id: "about", label: "About me" },
            { id: "skills", label: "My skills" },
            { id: "portfolio", label: "Portfolio" },
            { id: "contacts", label: "Contacts" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`text-white hover:text-gray-500 transition-colors ${
                  activeSection === item.id ? "text-gray-500" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
