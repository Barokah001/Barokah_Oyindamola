import React, { useState, useEffect, useRef } from "react";
import { Github, X, ArrowUpRight } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: "NutriNest",
      description:
        "A smart, user-friendly nutrition platform that helps users calculate BMI, understand their health metrics, and get personalised guidance for better wellness.",
      detailedDescription:
        "Developed an intuitive nutrition-focused web app that allows users to sign up, input health details, and instantly receive accurate BMI results with clear interpretations. Designed educational sections explaining BMI and calorie needs for both beginners and informed users. Built with modern React patterns, responsive layouts, and smooth UI interactions to ensure an accessible experience across devices.",
      image: "./images/NutriNest.png",
      technologies: ["React", "TypeScript", "Tailwind", "Supabase"],
      githubUrl: "https://github.com/Barokah001/",
      liveUrl: "https://nutri-nest-nine.vercel.app",
      highlights: [
        "BMI calculator",
        "User authentication",
        "Clean UX writing",
        "Responsive & accessible design",
        "Light/dark mode",
      ],
    },
    {
      id: 2,
      title: "Royale Outfits",
      description:
        "A modern e-commerce clothing platform for premium kaftans, traditional caps, and ready-made menswear, designed with a clean and elegant shopping experience.",
      detailedDescription:
        "Built a full-featured fashion e-commerce website focused on showcasing African menswear. Implemented dynamic product listings, collection pages, smooth animations, and a responsive UI. The project emphasises performance, accessibility, and a luxury brand feel.",
      image: "./images/royale-outfit.png",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
      githubUrl: "https://github.com/Barokah001",
      liveUrl: "https://royale-outfit.vercel.app/",
      highlights: [
        "Modern App Router architecture",
        "Smooth UI animations",
        "Responsive & accessible design",
        "Clean product & collection pages",
      ],
    },
    {
      id: 3,
  title: "Our Diet Line Website",

  description:
    "A responsive organizational website built to showcase ODL's mission, initiatives, impact, and opportunities to get involved.",

  detailedDescription:
    "Designed and developed a modern website for Our Diet Line (ODL), a nutrition-focused organization dedicated to advocacy, innovation, and capacity development. The website presents the organization's initiatives, impact, and key information through a clean, responsive interface with smooth navigation and engaging visual sections.",

  image: "./images/odl.png",

  technologies: ["React", "JavaScript", "Tailwind CSS"],

  githubUrl: "https://github.com/Barokah001/ODL-Web",

  liveUrl: "https://ourdietline.org/",

  highlights: [
    "Responsive design",
    "Interactive navigation",
    "Clear presentation of initiatives and impact",
    "Mobile-friendly layout",
    "Modern visual design"
  ],
    },
    {
      id: 4,
      title: "Ramadan Companion",
      description:
        "A serene, spiritually uplifting platform offering daily Qur'an & Hadith quotes, Ramadan-themed downloadable images, and guided adhkar for visitors.",
      detailedDescription:
        "Built a spiritually centred web platform designed to support Muslims throughout Ramadan. The website provides daily inspirational quotes from the Qur'an and Hadith, a curated collection of beautifully designed Ramadan images that users can download and share across social media, and a section dedicated to daily adhkar. Focused on simplicity, accessibility, and a calming user experience with smooth navigation, responsive layouts, and modern frontend patterns.",
      image: "./images/RamadanCompanion.png",
      technologies: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/Barokah001/Ramadan_Companion",
      liveUrl: "https://ramadan-companion-three.vercel.app/",
      highlights: [
        "Daily Qur'an & Hadith quotes",
        "Downloadable Ramadan images",
        "Daily adhkar section",
        "Minimal & calming UI",
        "Responsive design",
      ],
    },
    {
      id: 5,
      title: "FruitVilla",
      description:
        "A fresh and vibrant fruit delivery platform featuring clean UI, product listings, and seamless cart integration for a smooth shopping experience.",
      detailedDescription:
        "Created a full-featured delivery platform with product filtering, shopping cart persistence, and checkout flow. Emphasised performance optimisation and accessibility standards.",
      image: "./images/fruitvilla.png",
      technologies: ["HTML", "JavaScript", "Tailwind"],
      githubUrl: "https://github.com/Barokah001/FruitVilla",
      liveUrl: "https://fruitvilla.vercel.app/",
      highlights: ["Product filtering", "Cart persistence", "Mobile first"],
    },
    {
      id: 6,
  title: "Techty Website",
      description:
        "A sleek, responsive tech brand website showcasing services and solutions with an engaging design and smooth navigation.",
      detailedDescription:
        "Built a comprehensive tech brand website featuring dynamic animations, responsive layouts, and optimised performance. Implemented modern React patterns with custom hooks for state management and seamless user interactions.",
      image: "./images/Techty.png",
      technologies: ["React", "JavaScript", "Tailwind"],
      githubUrl: "https://github.com/Barokah001/Techty-Web",
      liveUrl: "https://techty-web.vercel.app/",
      highlights: ["Responsive design", "Smooth animations", "SEO optimised"],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );
    projectRefs.current.forEach((ref) => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset";
    setTimeout(() => setSelectedProject(null), 200);
  };

  return (
    <section id="projects" className="py-28 bg-paper border-t border-line">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16">
          <p className="font-mono text-xs text-accent mb-3">// 03 — Projects</p>
          <h2 className="font-display font-semibold text-4xl md:text-5xl text-navy-950 mb-4">
            Featured projects
          </h2>
          <p className="text-muted max-w-xl">
            A selection of recent builds — see the code, or open the live
            site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative flex flex-col h-full bg-paper border border-line hover:border-navy-950 overflow-hidden transition-all duration-500 opacity-0 translate-y-6"
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <div
                className="relative h-52 overflow-hidden cursor-pointer border-b border-line shrink-0"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-navy-950/0 group-hover:bg-navy-950/85 transition-colors duration-300 flex items-end">
                  <div className="p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    <span className="inline-flex items-center gap-1.5 text-white text-sm font-medium">
                      View details
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-navy-950 mb-2">{project.title}</h3>
                <p className="text-muted text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 text-xs font-medium text-navy-950 border border-line"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 mt-auto pt-1">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-navy-950 text-navy-950 text-sm font-medium hover:bg-navy-950 hover:text-white transition-colors"
                  >
                    <Github size={16} />
                    Code
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 bg-navy-950 text-white text-sm font-medium hover:bg-navy-800 transition-colors"
                  >
                    Live
                    <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/70"
          onClick={closeModal}
        >
          <div
            className="relative bg-paper max-w-3xl w-full max-h-[90vh] overflow-y-auto border border-line"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              aria-label="Close"
              className="absolute top-4 right-4 p-2 bg-paper border border-line hover:bg-navy-950 hover:text-white transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="relative h-64 overflow-hidden border-b border-line">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h2 className="font-display font-semibold text-2xl text-navy-950 mb-2">
                {selectedProject.title}
              </h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.technologies.map((tech, idx) => (
                  <span key={idx} className="px-2.5 py-1 text-xs font-medium text-navy-950 border border-line">
                    {tech}
                  </span>
                ))}
              </div>

              <p className="font-mono text-xs text-accent mb-2">// overview</p>
              <p className="text-muted leading-relaxed mb-8">
                {selectedProject.detailedDescription}
              </p>

              <p className="font-mono text-xs text-accent mb-3">// key highlights</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                {selectedProject.highlights.map((highlight, idx) => (
                  <div key={idx} className="px-4 py-3 border border-line text-sm text-navy-950">
                    {highlight}
                  </div>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 border border-navy-950 text-navy-950 font-medium hover:bg-navy-950 hover:text-white transition-colors"
                >
                  <Github size={18} />
                  View code
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 bg-navy-950 text-white font-medium hover:bg-navy-800 transition-colors"
                >
                  View live site
                  <ArrowUpRight size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;