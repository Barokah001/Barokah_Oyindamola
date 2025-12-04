import { useEffect, useRef, useState } from "react";

const About = () => {
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

  const stats = [
    { number: "15+", label: "Projects Completed" },
    { number: "100%", label: "Client Satisfaction" },
    { number: "2+", label: "Years Experience" },
  ];

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-5xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl transform rotate-3"></div>
              <div className="relative bg-gradient-to-br from-purple-50 to-blue-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Passionate Frontend Developer
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  I specialize in building responsive, user-centric web
                  applications that combine aesthetic appeal with functional
                  excellence. My approach focuses on writing clean, maintainable
                  code while ensuring optimal performance and accessibility.
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  With expertise in modern JavaScript frameworks and a keen eye
                  for design, I transform ideas into engaging digital
                  experiences that drive results and exceed expectations.
                </p>

                <div className="flex flex-wrap gap-3">
                  {[
                    "React",
                    "JavaScript",
                    "Tailwind CSS",
                    "Responsive Design",
                    "UI/UX",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white rounded-lg text-gray-700 font-medium shadow-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-6 bg-gradient-to-br from-purple-50 to-blue-50 rounded-2xl hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 bg-gray-900 text-white rounded-2xl">
              <h4 className="text-xl font-bold mb-4">
                What I Bring to the Table
              </h4>
              <ul className="space-y-3">
                {[
                  "Clean, maintainable code architecture",
                  "Pixel-perfect implementation of designs",
                  "Performance optimization & best practices",
                  "Cross-browser compatibility",
                  "Collaborative team player",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-purple-400 mt-1">✓</span>
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
