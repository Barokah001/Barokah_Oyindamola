"use client";

import { useState } from "react";
import Button from "./Button";
import { FaBars, FaWindowClose } from "react-icons/fa";

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId = "") => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false); // close sidebar after click
  };

  return (
    <nav
      className={`${
        isOpen ? "absolute backdrop-blur-[6px] items-center" : "md:fixed"
      } top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-[6px] items-center`}
    >
      <div className="flex justify-between items-center text-center pt-5 px-6 py-4">
        {/* Logo */}
        <h2 className="font-semibold text-white">Barokah Oyin</h2>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-8">
          {[
            { id: "about", label: "About me" },
            { id: "skills", label: "My skills" },
            { id: "projects", label: "Projects" },
            { id: "contacts", label: "Contacts" },
          ].map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className={`cursor-pointer text-white hover:text-gray-300 transition-colors ${
                  activeSection === item.id ? "text-gray-300" : ""
                }`}
              >
                {item.label}
              </button>
            </li>
          ))}
          <a href="mailto:alimibarabarakat001@gmail.com">
            <Button
              name="Contact Me"
              style={`bg-gray-500 text-white rounded-2xl hover:bg-gray-600`}
            />
          </a>
        </ul>

        {/* Mobile Menu Icon (hidden when sidebar is open) */}
        {!isOpen && (
          <div
            className="md:hidden flex text-2xl text-white cursor-pointer items-center"
            onClick={() => setIsOpen(true)}
          >
            <FaBars />
          </div>
        )}
      </div>

      {/* Mobile Sidebar */}
      {isOpen && (
        <div className="absolute top-0 left-0 h-screen w-1/2 bg-black/20 backdrop-blur-[8px] flex flex-col items-center pt-20 space-y-6 md:hidden">
          {/* Close Icon inside sidebar */}
          <div
            className="absolute top-4 right-4 text-2xl text-white cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <FaWindowClose />
          </div>

          {[
            { id: "about", label: "About me" },
            { id: "skills", label: "My skills" },
            { id: "projects", label: "Projects" },
            { id: "contacts", label: "Contacts" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`block text-lg text-white hover:text-gray-300 transition-colors ${
                activeSection === item.id ? "text-gray-300" : ""
              }`}
            >
              {item.label}
            </button>
          ))}

          <a href="mailto:alimibarabarakat001@gmail.com">
            <Button
              name="Contact Me"
              style={`bg-gray-500 text-white rounded-2xl hover:bg-gray-600`}
            />
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
