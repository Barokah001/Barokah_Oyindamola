import React, { useState } from "react";
import { FaCss3Alt, FaGit, FaHtml5, FaNodeJs, FaNpm, FaReact } from "react-icons/fa";


const SkillsSection = () => {
   const [activeSkill, setActiveSkill] = useState(null);

  const handleClick = (skillName) => {
    setActiveSkill(skillName === activeSkill ? null : skillName);
  };

  return (
    <section id="skills" className="py-20 px-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">My skills</h2>

          <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
            <div className="flex md:flex-col gap-5 text-[80px]">
              <div
                onClick={() => handleClick("react")}
                className={`flex flex-col gap-3 justify-center items-center rounded-2xl h-[150px] w-[110px] bg-gray-800 text-gray-500 hover:text-blue-400 ${
                  activeSkill === "react" ? "text-blue-400 " : "text-gray-500"
                }`}
              >
                <FaReact />
                <p className="text-xl font-semibold">React</p>
              </div>
              <div
                onClick={() => handleClick("html")}
                className={`flex flex-col gap-3 justify-center items-center rounded-2xl h-[150px] w-[110px] bg-gray-800 text-gray-500 hover:text-red-400 ${
                  activeSkill === "html" ? "text-red-400 " : "text-gray-500"
                }`}
              >
                <FaHtml5 />
                <p className="text-xl font-semibold">HTML5</p>
              </div>
            </div>

            <div className="flex md:flex-col gap-5 text-[80px] md:pt-30">
              <div
                onClick={() => handleClick("css")}
                className={`flex flex-col gap-3 justify-center items-center rounded-2xl h-[150px] w-[110px] bg-gray-800 text-gray-500 hover:text-yellow-400 ${
                  activeSkill === "css" ? "text-yellow-400 " : "text-gray-500"
                }`}
              >
                <FaCss3Alt />
                <p className="text-xl font-semibold">CSS3</p>
              </div>
              <div
                onClick={() => handleClick("nodejs")}
                className={`flex flex-col gap-3 justify-center items-center rounded-2xl h-[150px] w-[110px] bg-gray-800 text-gray-500 hover:text-green-400 ${
                  activeSkill === "nodejs" ? "text-green-400 " : "text-gray-500"
                }`}
              >
                <FaNodeJs />
                <p className="text-xl font-semibold">NodeJs</p>
              </div>
            </div>

            <div className="flex md:flex-col gap-5 text-[80px]">
              <div
                onClick={() => handleClick("npm")}
                className={`flex flex-col gap-3 justify-center items-center rounded-2xl h-[150px] w-[110px] bg-gray-800 text-gray-500 hover:text-blue-400 ${
                  activeSkill === "npm" ? "text-blue-400 " : "text-gray-500"
                }`}
              >
                <FaNpm />
                <p className="text-xl font-semibold">npm</p>
              </div>
              <div
                onClick={() => handleClick("git")}
                className={`flex flex-col gap-3 justify-center items-center rounded-2xl h-[150px] w-[110px] bg-gray-800 text-gray-500 hover:text-red-400 ${
                  activeSkill === "git" ? "text-red-400 " : "text-gray-500"
                }`}
              >
                <FaGit />
                <p className="text-xl font-semibold">git</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection