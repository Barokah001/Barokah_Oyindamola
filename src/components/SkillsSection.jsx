import React from 'react'

const SkillsSection = () => {
    const skills = ["HTML", "CSS", "SASS", "JS", "QUERY", "GIT", "NPM", "TS"];
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My skills</h2>
          <div className="w-16 h-1 bg-gray-500 mx-auto mb-16"></div>

          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill) => (
              <div
                key={skill}
                className="w-24 h-24 bg-gray-500 rounded-full flex items-center justify-center text-white font-bold text-sm hover:bg-gray-6
                00 transition-colors cursor-pointer"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection