import React, { useState, useEffect, useRef } from "react";
import { Computer, Github, X, ExternalLink, ComputerIcon } from "lucide-react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectRefs = useRef([]);

  const projects = [
    {
  id: 1,
  title: "NutriNest",
  description:
    "A smart, user-friendly nutrition platform that helps users calculate BMI, understand their health metrics, and get personalized guidance for better wellness.",
  detailedDescription:
    "Developed an intuitive nutrition-focused web app that allows users to sign up, input health details, and instantly receive accurate BMI results with clear interpretations. Designed educational sections explaining BMI and calorie needs for both beginners and informed users. Built with modern React patterns, responsive layouts, and smooth UI interactions to ensure an accessible experience across devices.",
  image: "./images/NutriNest.png",
  technologies: ["React", "JavaScript", "Tailwind", "Supabase"],
  techColors: ["text-blue-400", "text-yellow-400", "text-cyan-400", "text-green-400"],
  githubUrl: "https://github.com/Barokah001/NutriNest",
  liveUrl: "https://nutri-nest-nine.vercel.app",
  highlights: [
    "BMI Calculator",
    "User Authentication",
    "Clean UX Writing",
    "Responsive & Accessible Design",
    "Light/Dark Mode"
  ],
},

    {
      id: 2,
      title: "Techty Website",
      description:
        "A sleek, responsive tech brand website showcasing services and solutions with an engaging design and smooth navigation",
      detailedDescription:
        "Built a comprehensive tech brand website featuring dynamic animations, responsive layouts, and optimized performance. Implemented modern React patterns with custom hooks for state management and seamless user interactions.",
      image: "./images/Techty.png",
      technologies: ["React", "Javascript", "Tailwind"],
      techColors: ["text-blue-400", "text-yellow-400", "text-cyan-400"],
      githubUrl: "https://github.com/Barokah001/Techty-Web",
      liveUrl:
        "https://techty-web-mzdy-4uu5wnact-alimibarakat001gmailcoms-projects.vercel.app/",
      highlights: ["Responsive Design", "Smooth Animations", "SEO Optimized"],
    },
    {
      id: 3,
      title: "E-commerce Product Page",
      description:
        "A modern product display page with dynamic image switching, quantity updates, and 'Add to Cart' functionality for a real-world online store feel.",
      detailedDescription:
        "Developed an interactive e-commerce interface with advanced cart functionality, image galleries with zoom capabilities, and real-time inventory management. Focused on creating an intuitive shopping experience.",
      image: "./images/sneakers.png",
      technologies: ["React", "Javascript", "Tailwind"],
      techColors: ["text-blue-400", "text-yellow-400", "text-cyan-400"],
      githubUrl: "https://github.com/Barokah001/E-commerce-Products-Page",
      liveUrl: "https://e-commerce-products-page-green.vercel.app/",
      highlights: ["Cart Management", "Image Gallery", "State Management"],
    },
    {
      id: 4,
      title: "FruitVilla",
      description:
        "A fresh and vibrant fruit delivery platform featuring clean UI, product listings, and seamless cart integration for a smooth shopping experience.",
      detailedDescription:
        "Created a full-featured delivery platform with product filtering, shopping cart persistence, and checkout flow. Emphasized performance optimization and accessibility standards.",
      image: "./images/fruitvilla.png",
      technologies: ["HTML", "Javascript", "Tailwind"],
      techColors: ["text-orange-400", "text-yellow-400", "text-cyan-400"],
      githubUrl: "https://github.com/Barokah001/FruitVilla",
      liveUrl: "https://fruitvilla.vercel.app/",
      highlights: ["Product Filtering", "Cart Persistence", "Mobile First"],
    },
  ];

  useEffect(() => {
    // Scroll animation observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

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
    setTimeout(() => setSelectedProject(null), 300);
  };

  return (
    <section
      id="projects"
      className="px-6 md:px-20 bg-gradient-to-br from-gray-50 to-gray-100 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h1>
          <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Showcasing my expertise in building modern, responsive web
            applications with clean code and exceptional user experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Project Image with Overlay */}
              <div
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => openModal(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-white text-sm mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-3">
                      <button className="flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-lg hover:bg-white/30 transition-all">
                        <ExternalLink size={16} />
                        View Details
                      </button>
                    </div>
                  </div>
                </div>

                {/* Quick Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Github size={20} className="text-gray-800" />
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-lg hover:bg-white transition-all"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ComputerIcon size={20} className="text-gray-800" />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className={`px-3 py-1 text-xs font-semibold ${project.techColors[idx]} bg-gray-100 rounded-full`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    <Github size={18} />
                    <span className="text-sm font-medium">Code</span>
                  </a>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                  >
                    <ComputerIcon size={18} />
                    <span className="text-sm font-medium">Live</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* See More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            View All Projects
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProject && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm transition-opacity duration-300 ${
            isModalOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeModal}
        >
          <div
            className={`bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl transform transition-all duration-300 ${
              isModalOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg hover:bg-gray-100 transition-colors z-10"
            >
              <X size={24} className="text-gray-800" />
            </button>

            {/* Modal Image */}
            <div className="relative h-80 overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-3xl font-bold text-white mb-2">
                  {selectedProject.title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-sm font-semibold text-white bg-white/20 backdrop-blur-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Content */}
            <div className="p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Overview
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {selectedProject.detailedDescription}
              </p>

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Key Highlights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                {selectedProject.highlights.map((highlight, idx) => (
                  <div
                    key={idx}
                    className="p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg"
                  >
                    <p className="text-gray-800 font-semibold text-center">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                  <Github size={20} />
                  <span className="font-medium">View Code</span>
                </a>
                <a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all"
                >
                  <Computer size={20} />
                  <span className="font-medium">View Live Site</span>
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
