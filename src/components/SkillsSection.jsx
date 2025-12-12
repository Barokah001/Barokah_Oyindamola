import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaNpm,
  FaGit,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skills = [
    { name: "React", icon: FaReact, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-gray-900" },
    { name: "HTML5", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
    { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
    { name: "npm", icon: FaNpm, color: "text-red-600" },
    { name: "Git", icon: FaGit, color: "text-orange-600" },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-24 bg-gradient-to-br from-gray-50 to-purple-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Equipped with modern tools and technologies to build exceptional web
            experiences
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className={`transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="group bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <div className="flex flex-col items-center">
                    <div
                      className={`text-6xl mb-4 ${skill.color} transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">
                      {skill.name}
                    </h3>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Skills */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Also Proficient In
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Tailwind CSS",
              "Responsive Design",
              "RESTful APIs",
              "Version Control",
              "Agile/Scrum",
              "Web Performance",
              "Accessibility",
            ].map((skill) => (
              <span
                key={skill}
                className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
