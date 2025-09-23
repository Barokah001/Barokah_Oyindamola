import React from 'react'
import TypewriterText from './TypewriterText';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <TypewriterText
            text="Hi there! My name is Barokah, and I'm a front-end developer"
            speed={80}
            className="text-balance"
          />
        </h1>

        <button className="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-full text-lg font-medium mt-8">
          Download CV
        </button>
      </div>
    </section>
  );
}

export default HeroSection