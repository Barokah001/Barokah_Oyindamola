import React from 'react';
import { ChevronDown, Download } from 'lucide-react';

const TypewriterText = ({ text, speed = 80 }) => {
  const [displayedText, setDisplayedText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text, speed]);

  return <span>{displayedText}</span>;
};

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden"
    >
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(167, 139, 250, 0.3) 2%, transparent 0%), 
                           radial-gradient(circle at 75px 75px, rgba(139, 92, 246, 0.3) 2%, transparent 0%)`,
            backgroundSize: "100px 100px",
          }}
        ></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-5xl mx-auto">
        <div className="mb-6 inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
          <span className="text-sm font-medium">Welcome to my portfolio</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <TypewriterText text="Hi, I'm Barokah Oyindamola" speed={80} />
        </h1>

        <p className="text-xl md:text-2xl text-purple-300 mb-4 font-light">
          Frontend Developer & UI Enthusiast
        </p>

        <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Crafting exceptional digital experiences with clean code, modern
          design, and a passion for creating intuitive user interfaces
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-purple-500/50 transform hover:-translate-y-1 transition-all"
          >
            View My Work
          </button>
          <a
            href="https://drive.google.com/file/d/1iOw6e4kZKq19BQHLWCOVqxfjBijLAu7i/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold hover:bg-white/10 backdrop-blur-sm transition-all flex items-center gap-2">
              <Download size={20} />
              Download CV
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;