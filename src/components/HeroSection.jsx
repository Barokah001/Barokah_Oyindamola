import React from 'react'
import TypewriterText from './TypewriterText';
import Button from './Button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-700">
      {/* Background Image */}
      {/* <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url(/images/hero-bg.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div> */}

      {/* Content */}
      <div className="flex flex-col justify-center items-center relative z-10 text-center text-white px-6">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
          <TypewriterText
            text="Hi there! My name is Barokah Oyindamola, and I'm a front-end developer"
            speed={80}
            className="text-balance"
          />
        </h1>

        <a href="https://drive.google.com/file/d/1aAiahcLI5e82Lcdh6Nm06kEx-lBQM0ru/view?usp=drive_link">
          <Button
            name="Download CV"
            style={`flex items-center justify-center border-1 border-gray-500 text-white rounded-full hover:bg-gray-500`}
          />
        </a>
      </div>
    </section>
  );
}

export default HeroSection