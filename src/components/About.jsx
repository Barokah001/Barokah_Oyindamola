import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";

const About = () => {
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

  const stats = [
    { number: "15+", label: "Projects completed" },
    { number: "100%", label: "Client satisfaction" },
    { number: "3+", label: "Years experience" },
  ];

  const strengths = [
    "Clean, maintainable code architecture",
    "Pixel-accurate implementation of designs",
    "Performance optimisation & best practices",
    "Cross-browser compatibility",
    "Collaborative, communicative team player",
  ];

  return (
    <section id="about" ref={sectionRef} className="py-28 bg-paper border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-xs text-accent mb-3">// 01 — About</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-navy-950">
            About me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div
            className={`transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <h3 className="text-xl font-semibold text-navy-950 mb-4">
              Frontend developer, focused on the details that make an
              interface feel considered.
            </h3>
            <p className="text-muted leading-relaxed mb-4">
              I build responsive, user-centred web applications where
              design intent survives contact with real code. My approach
              starts with structure: clear component boundaries, readable
              state, and layouts that hold up across devices before any
              polish is applied.
            </p>
            <p className="text-muted leading-relaxed mb-8">
              I work mainly with React, Next.js and TypeScript, pairing
              modern tooling with an eye for typography, spacing and
              accessibility — so the finished product reads as deliberate,
              not default.
            </p>

            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Accessibility"].map(
                (skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 border border-line text-sm text-navy-950 font-medium"
                  >
                    {skill}
                  </span>
                )
              )}
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="grid grid-cols-3 gap-px bg-line border border-line mb-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-paper text-center px-3 py-8">
                  <div className="font-display font-semibold text-3xl text-navy-950 mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="border border-line p-8">
              <p className="font-mono text-xs text-accent mb-4">// what I bring</p>
              <ul className="space-y-3">
                {strengths.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-navy-950">
                    <Check size={16} className="text-accent mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;