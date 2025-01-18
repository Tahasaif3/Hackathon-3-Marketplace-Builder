import React from 'react'
import Image from 'next/image'
import { MdOutlineDone } from 'react-icons/md'

export default function AboutSection() {
  return (
    <section className="bg-black text-white py-16 min-h-screen">
      <div className="container mx-auto px-4 lg:max-w-[1320px]">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
          <Image src={"/Aboutus.png"} width={88} height={40} alt='blogs logo' className='mb-4'/>
            <h3 className="text-4xl font-bold mb-4">
              <span className="text-orange-500">We </span>
              Create the best
              <br />
              foody product
            </h3>
            <p className="text-gray-400 mb-6 text-xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam
              pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit
              augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis
              sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <ul className="mb-8 space-y-2">
              {['Lacus nisi, et ac dapibus sit eu velit in consequat.',
                'Quisque diam pellentesque bibendum non dui volutpat fringilla',
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit'].map((item, index) => (
                <li key={index} className="flex items-center">
                  <MdOutlineDone className="w-5 h-5 mr-2 text-white" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <button className="bg-[#FF9F0D] text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
              Read More
            </button>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-4 mt-8 lg:mt-0">
            <div className="col-span-2">
              <Image
                src="/abou1.png"
                alt="Main Dish"
                width={600}
                height={300}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/about2.png"
                alt="Side Dish 1"
                width={300}
                height={150}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div>
              <Image
                src="/about3.png"
                alt="Side Dish 2"
                width={300}
                height={150}
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

