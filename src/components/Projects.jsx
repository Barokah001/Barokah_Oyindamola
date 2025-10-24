import React from 'react'
import Button from './Button'
import { Computer, Github } from 'lucide-react';

const Projects = () => {
  return (
    <section id="projects" className="px-20 bg-[#edede9] py-15">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="justify-start text-3xl font-bold">Recent Projects</h1>

        <div className="flex flex-col md:flex-row gap-12 md:gap-7">
          <div className="flex flex-col gap-4 justify-start md:py-10">
            <img src="./images/Techty.png" alt="" className="rounded-lg" />
            <h3 className="text-l font-semibold">Techty Website</h3>
            <p>
              A sleek, responsive tech brand website showcasing services and
              solutions with an engaging design and smooth navigation
            </p>
            <div className="flex gap-2 justify-start">
              <Button
                name="React"
                style={"text-blue-300 bg-white rounded-full"}
              />
              <Button
                name="Javascript"
                style={"text-green-300 bg-white rounded-full"}
              />
              <Button
                name="Tailwind"
                style={"text-red-300 bg-white rounded-full"}
              />
            </div>

            <div className="flex justify-start gap-3">
              <a href="https://github.com/Barokah001/Techty-Web">
                <button className="flex gap-3 py-2 px-6 rounded-3xl bg-gray-700 text-white cursor-pointer">
                  <Github />
                  Code
                </button>
              </a>

              <a href="https://github.com/Barokah001/Techty-Web">
                <button className="flex gap-3 py-2 px-6 rounded-3xl bg-gray-700 text-white cursor-pointer">
                  <Computer />
                  Live
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4  justify-start md:py-10">
            <img src="./images/sneakers.png" alt="" className="rounded-lg" />
            <h3 className="text-l font-semibold">E-commercer Product page</h3>
            <p>
              A modern product display page with dynamic image switching,
              quantity updates, and “Add to Cart” functionality for a real-world
              online store feel.
            </p>
            <div className="flex gap-2 justify-start">
              <Button
                name="React"
                style={"text-blue-300 bg-white rounded-full"}
              />
              <Button
                name="Javascript"
                style={"text-green-300 bg-white rounded-full"}
              />
              <Button
                name="Tailwind"
                style={"text-red-300 bg-white rounded-full"}
              />
            </div>

            <div className="flex justify-start gap-3">
              <a href="https://github.com/Barokah001/E-commerce-Products-Page">
                <button className="flex gap-3 py-2 px-6 rounded-3xl bg-gray-700 text-white cursor-pointer">
                  <Github />
                  Code
                </button>
              </a>

              <a href="https://e-commerce-products-page-green.vercel.app/">
                <button className="flex gap-3 py-2 px-6 rounded-3xl bg-gray-700 text-white cursor-pointer">
                  <Computer />
                  Live
                </button>
              </a>
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-start md:py-10">
            <img src="./images/fruitvilla.png" alt="" className="rounded-lg" />
            <h3 className="text-l font-semibold">FruitVilla</h3>
            <p>
              A fresh and vibrant fruit delivery platform featuring clean UI,
              product listings, and seamless cart integration for a smooth
              shopping experience.
            </p>
            <div className="flex gap-2 justify-start">
              <Button
                name="HTML"
                style={"text-blue-300 bg-white rounded-full"}
              />
              <Button
                name="Javascript"
                style={"text-green-300 bg-white rounded-full"}
              />
              <Button
                name="Tailwind"
                style={"text-red-300 bg-white rounded-full"}
              />
            </div>

            <div className="flex justify-start gap-3">
              <a href="https://github.com/Barokah001/FruitVilla">
                <button className="flex gap-3 py-2 px-6 rounded-3xl bg-gray-700 text-white cursor-pointer">
                  <Github />
                  Code
                </button>
              </a>

              <a href="https://fruitvilla.vercel.app/">
                <button className="flex gap-3 py-2 px-6 rounded-3xl bg-gray-700 text-white cursor-pointer">
                  <Computer />
                  Live
                </button>
              </a>
            </div>
          </div>
        </div>
        <Button name="See More" style={"text-white bg-gray-500 rounded-lg"} />
      </div>
    </section>
  );
}

export default Projects