import { useEffect, useRef, useState } from "react";

const SkillsSection = () => {
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

  const stack = [
    { key: "react", value: "expert" },
    { key: "next.js", value: "advanced" },
    { key: "typescript", value: "advanced" },
    { key: "javascript", value: "expert" },
    { key: "tailwindcss", value: "advanced" },
  ];

  const tools = [
    "HTML5 & CSS3",
    "Node.js",
    "Git & GitHub",
    "npm",
    "RESTful APIs",
    "Responsive design",
    "Web accessibility",
    "Agile / Scrum",
  ];

  return (
    <section id="skills" ref={sectionRef} className="py-28 bg-surface border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <p className="font-mono text-xs text-accent mb-3">// 02 — Skills</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-navy-950 mb-4">
            Technical skills
          </h2>
          <p className="text-muted max-w-xl">
            The tools I reach for most, and how comfortable I am with each of
            them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* stack.json card */}
          <div
            className={`border border-line bg-paper transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <div className="flex items-center justify-between px-5 py-3 border-b border-line">
              <span className="font-mono text-xs text-muted">stack.json</span>
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full border border-muted/40" />
                <span className="w-2 h-2 rounded-full border border-muted/40" />
                <span className="w-2 h-2 rounded-full border border-muted/40" />
              </div>
            </div>
            <div className="bg-navy-950 px-6 py-6 font-mono text-[13px] leading-8">
              <div className="text-white">{"{"}</div>
              {stack.map((item, i) => (
                <div key={item.key} className="pl-4">
                  <span className="text-white">"{item.key}"</span>
                  <span className="text-[#7C93B8]">: </span>
                  <span className="text-accent">"{item.value}"</span>
                  {i < stack.length - 1 && <span className="text-[#7C93B8]">,</span>}
                </div>
              ))}
              <div className="text-white">{"}"}</div>
            </div>
          </div>

          {/* tools list */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <p className="font-mono text-xs text-muted mb-4">$ ls also-proficient-in/</p>
            <ul className="border border-line divide-y divide-line bg-paper">
              {tools.map((tool) => (
                <li
                  key={tool}
                  className="flex items-center gap-3 px-5 py-3.5 text-sm text-navy-950 hover:bg-surface transition-colors"
                >
                  <span className="w-1.5 h-1.5 bg-navy-950 shrink-0" />
                  {tool}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;