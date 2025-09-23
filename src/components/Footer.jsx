import React, { useState } from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [activeSection, setActiveSection] = useState("about");
  
  const scrollToSection = (sectionId = "") => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section className="px-20 py-15  ">
      <div className="flex w-full justify-between items-center border-t-1 border-gray-300 py-8">
        <p className="text-gray-500">
          © {currentYear} Barokah_Oyindamola. All rights reserved.
        </p>
        <div className="flex justify-start items-center">
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
                  className={`text-gray-500 hover:text-gray-600 transition-colors ${
                    activeSection === item.id ? "text-gray-500" : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer