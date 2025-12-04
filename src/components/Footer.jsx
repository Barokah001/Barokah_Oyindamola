import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contacts", label: "Contact" },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Barokah<span className="text-purple-400">.</span>
            </h3>
            <p className="text-gray-400">
              Crafting digital experiences with passion and precision. Let's
              build something amazing together.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Connect</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/barokah-oyindamola"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/BarokahOyin"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/barokah_oyin/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Barokah Oyindamola. All rights reserved. Built with
            React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer