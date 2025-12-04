import React from 'react'
import TypewriterText from './TypewriterText';
import Button from './Button';
import { ChevronDown, Download } from 'lucide-react';

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-800 overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-40 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-sm font-medium">
            Welcome to my portfolio
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <TypewriterText text="Hi, I'm Barokah Oyindamola" speed={80} />
        </h1>

        <p className="text-xl md:text-2xl text-purple-200 mb-4 font-light">
          Frontend Developer & UI Enthusiast
        </p>

        <p className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with clean code, modern
          design, and a passion for creating intuitive user interfaces
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-white text-purple-900 rounded-full font-semibold hover:shadow-2xl transform hover:-translate-y-1 transition-all"
          >
            View My Work
          </button>
          <a
            href="https://drive.google.com/file/d/1aAiahcLI5e82Lcdh6Nm06kEx-lBQM0ru/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-900 transition-all flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className="text-white/60" />
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  );
};

export default HeroSection