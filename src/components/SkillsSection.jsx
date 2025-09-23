import React from 'react'

const SkillsSection = () => {
    const skills = [
      "/images/html.png",
      "/images/css.png",
      "/images/js.png",
      "/images/React-icon.svg.png",
      "/images/node.png",
    ];
  return (
    <section id="skills" className="py-20 px-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My skills</h2>
          <div className="w-16 h-1 bg-gray-500 mx-auto mb-16"></div>

          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill) => (
              <img src={skill} alt="" key={skill}
                className="flex items-center justify-between w-[150px] h-[190px]"/>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection