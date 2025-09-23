import React from 'react'
import Button from './Button'

const Projects = () => {
  return (
    <section className="px-20 bg-[#edede9] py-15">
      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="justify-start text-3xl font-bold">Recent Projects</h1>

        <div className="flex gap-7">
          <div className="flex flex-col gap-4 justify-start py-10">
            <img src="./images/Techty.png" alt="" className="rounded-lg" />
            <h3 className="text-l font-semibold">Techty Website</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              temporibus libero inventore! Quia, magni alias!
            </p>
            <div className="flex gap-2 justify-start">
              <Button name="React" style={"text-blue-300 bg-white rounded-full"} />
              <Button name="Javascript" style={"text-green-300 bg-white rounded-full"} />
              <Button name="Tailwind" style={"text-red-300 bg-white rounded-full"} />
            </div>
          </div>

          <div className="flex flex-col gap-4  justify-start py-10">
            <img src="./images/sneakers.png" alt="" className="rounded-lg" />
            <h3 className="text-l font-semibold">E-commercer Product page</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              temporibus libero inventore! Quia, magni alias!
            </p>
            <div className="flex gap-2 justify-start">
              <Button name="React" style={"text-blue-300 bg-white rounded-full"} />
              <Button name="Javascript" style={"text-green-300 bg-white rounded-full"} />
              <Button name="Tailwind" style={"text-red-300 bg-white rounded-full"} />
            </div>
          </div>

          <div className="flex flex-col gap-4 justify-start py-10">
            <img src="./images/fruitvilla.png" alt="" className="rounded-lg" />
            <h3 className="text-l font-semibold">FruitVilla</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est
              temporibus libero inventore! Quia, magni alias!
            </p>
            <div className="flex gap-2 justify-start">
              <Button name="HTML" style={"text-blue-300 bg-white rounded-full"} />
              <Button name="Javascript" style={"text-green-300 bg-white rounded-full"} />
              <Button name="Tailwind" style={"text-red-300 bg-white rounded-full"} />
            </div>
          </div>
        </div>
        <Button name="See More" style={"text-white bg-gray-500 rounded-lg"}/>
      </div>
    </section>
  );
}

export default Projects