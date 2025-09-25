import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <section className="px-20 py-15 ">
      <div className="flex flex-col md:flex-row w-full justify-start md:justify-between items-center border-t-1 border-gray-300 py-8">
        <p className="text-gray-500">
          © {currentYear} Barokah_Oyindamola. All rights reserved.
        </p>
        <div className="flex justify-start items-center">
          <ul>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="#about">About</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="#skills">Skills</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="#projects">Projects</a>
            </li>
            <li className="transition-transform duration-500 ease-in-out hover:translate-x-3 py-3 hover:text-gray-400">
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Footer