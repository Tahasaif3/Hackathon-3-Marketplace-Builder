"use client";

import { useState } from "react";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import StatisticsSection from "@/components/parner-section";
import Footer from "@/components/footer";
import PartnerStats from "@/components/partmer-stats";
import { FaShoppingBag, FaUser } from "react-icons/fa";
import { Search } from "lucide-react";
import { AiOutlineMenu } from "react-icons/ai";
import { MdShoppingCartCheckout } from "react-icons/md";

const menuCategories = [
  {
    name: "Starter Menu",
    items: [
      {
        name: "Alder Grilled Chinook Salmon",
        description: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        calories: "560 CAL",
      },
      {
        name: "Berries and creme tart",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        price: "43$",
        calories: "750 CAL",
      },
      {
        name: "Tormentoso Bush Pizza Pinotage",
        description: "Ground cumin, avocados, peeled and cubed",
        price: "14$",
        calories: "1000 CAL",
      },
      {
        name: "Spicy Vegan Potato Curry",
        description: "Spreadable cream cheese, crumbled blue cheese",
        price: "35$",
        calories: "950 CAL",
      },
    ],
    image: "/menu1.png?height=400&width=300&text=Starter",
  },
  {
    name: "Main Course",
    items: [
      {
        name: "Optic Big Breakfast Combo Menu",
        description: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        calories: "560 CAL",
      },
      {
        name: "Cashew Chicken with Stir-Fry",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        price: "43$",
        calories: "750 CAL",
      },
      {
        name: "Vegetables & Green Salad",
        description: "Ground cumin, avocados, peeled and cubed",
        price: "14$",
        calories: "1000 CAL",
      },
      {
        name: "Spicy Vegan Potato Curry",
        description: "Spreadable cream cheese, crumbled blue cheese",
        price: "35$",
        calories: "950 CAL",
      },
    ],
    image: "/menu2.png?height=400&width=300&text=Main+Course",
  },
  {
    name: "Dessert",
    items: [
      {
        name: "Fig and lemon cake",
        description: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        calories: "560 CAL",
      },
      {
        name: "Creamy mascarpone cake",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        price: "43$",
        calories: "750 CAL",
      },
      {
        name: "Pastry, blueberries, lemon juice",
        description: "Ground cumin, avocados, peeled and cubed",
        price: "14$",
        calories: "1000 CAL",
      },
      {
        name: "Pain au chocolat",
        description: "Spreadable cream cheese, crumbled blue cheese",
        price: "35$",
        calories: "950 CAL",
      },
    ],
    image: "/menu3.png?height=400&width=300&text=Dessert",
  },
  {
    name: "Drinks",
    items: [
      {
        name: "Caffe macchiato",
        description: "Toasted French bread topped with romano, cheddar",
        price: "32$",
        calories: "560 CAL",
      },
      {
        name: "Aperol Spritz Cappuccino",
        description: "Gorgonzola, ricotta, mozzarella, taleggio",
        price: "43$",
        calories: "750 CAL",
      },
      {
        name: "Caffe Latte Campuri",
        description: "Ground cumin, avocados, peeled and cubed",
        price: "14$",
        calories: "1000 CAL",
      },
      {
        name: "Tormentoso BushTea Pinotage",
        description: "Spreadable cream cheese, crumbled blue cheese",
        price: "35$",
        calories: "950 CAL",
      },
    ],
    image: "/menu4.png?height=400&width=300&text=Drinks",
  },
];

export default function MenuPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  return (
    <div className="bg-white text-black min-h-screen">
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <span className="text-orange-500 font-bold text-2xl">Food</span>luck
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>
          <ul
            className={`${
              isMenuOpen ? "block" : "hidden"
            } md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}
          ><br/>
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Menu" className="hover:text-orange-500">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="hover:text-orange-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Pages" className="hover:text-orange-500">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/Shop" className="hover:text-orange-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Chef" className="hover:text-orange-500">
                Chef
              </Link>
              </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
              Contact
            </Link>
            </li>

          </ul>
          <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-4 mt-4 md:mt-0">
            <div className="relative flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-auto bg-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <Link href={"/ShoppingCart"}>
              <button className="bg-gray-800 p-2 rounded-full">
                <FaShoppingBag />
              </button>
            </Link>
            <Link href={"/Signup"}>
              <button className="bg-gray-800 p-2 rounded-full">
                <FaUser />
              </button>
            </Link>
            <Link href={"/Checkout"}>
              <button className="bg-gray-800 p-2 rounded-full">
                <MdShoppingCartCheckout />
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-48 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png?height=256&width=1920&text=Menu+Hero+Image"
          alt="Menu Hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Our Menu</h1>
          <p className="text-sm md:text-base text-white mt-2">
            Home &gt; <span className="text-orange-400"> &nbsp; Menu</span>
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12">
        {menuCategories.map((category, index) => (
          <React.Fragment key={index}>
            <section className="mb-16">
              <div
                className={`flex flex-col md:flex-row ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } gap-8`}
              >
                <div className="w-full md:w-1/3">
                  <Image
                    src={category.image}
                    alt={category.name}
                    width={448}
                    height={626}
                    className="rounded-lg object-cover w-full h-auto"
                  />
                </div>
                <div className="w-full md:w-2/3">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 text-orange-500">
                    {category.name}
                  </h2>
                  <div className="space-y-6">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="flex flex-col md:flex-row justify-between items-start border-b border-gray-200 pb-4"
                      >
                        <div className="w-full md:w-3/4">
                          <h3 className="font-bold">{item.name}</h3>
                          <p className="text-gray-600 text-sm">{item.description}</p>
                          <p className="text-gray-500 text-xs">{item.calories}</p>
                        </div>
                        <span className="text-orange-500 font-bold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
            {index === 1 && <PartnerStats />}
          </React.Fragment>
        ))}
      </main>
      <StatisticsSection />
      <Footer />
    </div>
  );
}
