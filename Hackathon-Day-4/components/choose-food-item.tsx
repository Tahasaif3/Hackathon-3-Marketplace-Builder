import React from 'react'
import Image from 'next/image'

const foodItems = [
  { src: "/food1.png", alt: "Salad", discount: "Save 30%", label: "Fast Food Dish" },
  { src: "/food2.png", alt: "Burger" },
  { src: "/food3.png", alt: "Meat Dish" },
  { src: "/food4.png", alt: "Dessert" },
]

export default function FoodCategorySection() {
  return (
    <section className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4 ">
        <div className="flex justify-center">
          <Image
            src={"/wwhy.png"}
            width={169}
            height={40}
            alt='blogs logo'
          />
        </div>

        <h3 className="text-center text-4xl font-bold mb-8">
          Ch<span className="text-orange-500">oo</span>se Food Item
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {foodItems.map((item, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group">
              <Image
                src={item.src}
                alt={item.alt}
                width={300}
                height={300}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              {item.discount && (
                <div className="absolute top-4 left-4 bg-orange-500 text-white px-2 py-1 rounded">
                  {item.discount}
                </div>
              )}
              {item.label && (
                <div className="absolute bottom-4 left-4 bg-orange-500 text-white px-3 py-2 rounded-full">
                  {item.label}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

