import { useEffect, useRef, useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaNpm,
  FaGit,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const SkillsSection = () => {
  const [activeSkill, setActiveSkill] = useState(null);
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
    {
      name: "React",
      icon: FaReact,
      color: "from-blue-400 to-cyan-400",
      proficiency: 90,
    },
    {
      name: "HTML5",
      icon: FaHtml5,
      color: "from-orange-500 to-red-500",
      proficiency: 95,
    },
    {
      name: "CSS3",
      icon: FaCss3Alt,
      color: "from-blue-500 to-blue-600",
      proficiency: 90,
    },
    {
      name: "Node.js",
      icon: FaNodeJs,
      color: "from-green-500 to-green-600",
      proficiency: 75,
    },
    // {
    //   name: "npm",
    //   icon: FaNpn,
    //   color: "from-red-600 to-red-700",
    //   proficiency: 85,
    // },
    {
      name: "Git",
      icon: FaGit,
      color: "from-orange-600 to-red-600",
      proficiency: 85,
    },
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
                onClick={() =>
                  setActiveSkill(skill.name === activeSkill ? null : skill.name)
                }
              >
                <div
                  className={`relative group cursor-pointer bg-white rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 ${
                    activeSkill === skill.name ? "scale-105 shadow-2xl" : ""
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`text-6xl mb-4 bg-gradient-to-r ${skill.color} bg-clip-text text-transparent transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg mb-2">
                      {skill.name}
                    </h3>

                    {/* Proficiency Bar */}
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                        style={{
                          width:
                            activeSkill === skill.name
                              ? `${skill.proficiency}%`
                              : "0%",
                        }}
                      ></div>
                    </div>

                    {activeSkill === skill.name && (
                      <span className="text-sm text-gray-600 font-medium">
                        {skill.proficiency}% Proficiency
                      </span>
                    )}
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
                className="px-6 py-3 bg-white rounded-full text-gray-700 font-medium shadow-md hover:shadow-lg transition-shadow"
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
