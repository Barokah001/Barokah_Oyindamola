import { Mail, PhoneCall, ArrowUpRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Contacts = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "alimibarabarakat001@gmail.com",
      link: "mailto:alimibarabarakat001@gmail.com",
    },
    {
      icon: PhoneCall,
      title: "Phone",
      value: "+243 90 600 109 82",
      link: "tel:+243906001098",
    },
  ];

  const socialLinks = [
    { icon: FaLinkedin, url: "https://www.linkedin.com/in/barokah-oyindamola", label: "LinkedIn" },
    { icon: FaXTwitter, url: "https://x.com/BarokahOyin", label: "X (Twitter)" },
    { icon: FaInstagram, url: "https://www.instagram.com/barokah_oyin/", label: "Instagram" },
  ];

  return (
    <section id="contacts" ref={sectionRef} className="py-28 bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-xs text-accent mb-3">// 04 — Contact</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-navy-950 mb-4">
            Let&rsquo;s connect
          </h2>
          <p className="text-muted max-w-xl">
            Have a project in mind, or an opportunity worth discussing? I
            read every message.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-line border border-line max-w-3xl mb-16">
          {contactMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <a
                key={index}
                href={method.link}
                className={`group bg-navy-950 p-8 transition-all duration-700 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <Icon className="w-6 h-6 text-accent mb-6" />
                <h3 className="font-medium text-white text-sm mb-1">{method.title}</h3>
                <p className="text-white/70 text-sm break-words">{method.value}</p>
              </a>
            );
          })}
        </div>

        <div
          className={`mb-16 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="font-mono text-xs text-muted mb-4">$ follow</p>
          <div className="flex gap-3">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-12 h-12 flex items-center justify-center border border-navy-950 text-navy-950 hover:bg-navy-950 hover:text-white transition-colors"
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>

        <div
          className={`bg-navy-950 p-12 text-center transition-all duration-700 delay-400 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <h3 className="font-display font-semibold text-2xl md:text-3xl text-white mb-3">
            Ready to start a project?
          </h3>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            Let&rsquo;s build something clean, fast and well put together.
          </p>
          <a href="mailto:alimibarabarakat001@gmail.com">
            <button className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-navy-950 font-medium hover:bg-white/90 transition-colors">
              Get in touch
              <ArrowUpRight size={18} />
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;