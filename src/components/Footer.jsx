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
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="flex items-center gap-2 font-display font-semibold text-xl mb-4">
              <span className="w-2 h-2 rounded-full bg-accent" aria-hidden="true" />
              Barokah Oyindamola
            </h3>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Frontend developer building clean, accessible interfaces.
              Currently open to new projects and roles.
            </p>
          </div>

          <div>
            <p className="font-mono text-xs text-white/40 mb-4">// navigate</p>
            <ul className="space-y-2.5">
              {footerLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-accent transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs text-white/40 mb-4">// connect</p>
            <div className="flex gap-3">
              <a
                href="https://www.linkedin.com/in/barokah-oyindamola"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-accent hover:text-accent transition-colors"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/BarokahOyin"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-accent hover:text-accent transition-colors"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://www.instagram.com/barokah_oyin/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 flex items-center justify-center border border-white/20 hover:border-accent hover:text-accent transition-colors"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-sm">
            © {currentYear} Barokah Oyindamola. Built with React & Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;