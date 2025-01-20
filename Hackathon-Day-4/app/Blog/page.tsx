"use client"

import { useState } from "react"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import Footer from "@/components/footer"
import { ArrowRight, Calendar, Facebook, Instagram, Search, Star, Twitter, User } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { FaShoppingBag, FaUser } from "react-icons/fa"
import { MdShoppingCartCheckout } from "react-icons/md"
import { BiComment } from "react-icons/bi"
import { AiOutlineMenu } from "react-icons/ai"

function Blogs() {
  const blogPosts = [
    {
      id: 1,
      title: "10 Reasons To Do A Digital Detox Challenge",
      date: "Feb 14, 2022",
      author: "Admin",
      comments: "3",
      image: "/blogg1.png?height=400&width=600",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet sed diam nonumy eirmod tempor.",
    },
    {
      id: 2,
      title: "Traditional Soft Pretzels with Sweet Beer Cheese",
      date: "Feb 14, 2022",
      author: "Admin",
      comments: "3",
      image: "/blogg2.png?height=400&width=600",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet sed diam nonumy eirmod tempor.",
    },
    {
      id: 3,
      title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
      date: "Feb 14, 2022",
      author: "Admin",
      comments: "3",
      image: "/blogg3.png?height=400&width=600",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet sed diam nonumy eirmod tempor.",
    },
    {
      id: 4,
      title: "My Favourite Easy Black Pizza Toast Recipe",
      date: "Feb 14, 2022",
      author: "Admin",
      comments: "3",
      image: "/blogg4.png?height=400&width=600",
      description:
        "At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet sed diam nonumy eirmod tempor.",
    },
  ]

  const menuCategories = [
    { name: "Chicken Fry", count: 26, image: "/filter1.png?height=50&width=50" },
    { name: "Burger Food", count: 45, image: "/filter2.png?height=50&width=50" },
    { name: "Pizza", count: 16, image: "/filter3.png?height=50&width=50" },
    { name: "Fresh Fruits", count: 36, image: "/filter4.png?height=50&width=50" },
    { name: "Vegetables", count: 16, image: "/filter5.png?height=50&width=50" },
  ]
  const paginationItems = [
    { id: "<<", active: false },
    { id: 1, active: false },
    { id: 2, active: true },
    { id: 3, active: false },
    { id: ">>", active: false },
  ]

  const recentPosts = [
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "June 22, 2020",
      image: "/recent1.png?height=80&width=80",
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "June 22, 2020",
      image: "/recent2.png?height=80&width=80",
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "June 22, 2020",
      image: "/recent3.png?height=80&width=80",
    },
    {
      title: "Lorem ipsum dolor sit cing elit, sed do.",
      date: "June 22, 2020",
      image: "/recent4.png?height=80&width=80",
    },
  ]
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
    <div className="bg-white min-h-screen">
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl">
            <span className="text-orange-500 font-bold">Food</span>luck
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>
          <ul
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 text-white justify-center items-center w-full md:w-auto mt-4 md:mt-0`}
          >
            <li>
              <Link href="/" className="hover:text-orange-500 block md:inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Menu" className="hover:text-orange-500 block md:inline-block">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="hover:text-orange-500 block md:inline-block">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Pages" className="hover:text-orange-500 block md:inline-block">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-orange-500 block md:inline-block">
                About
              </Link>
            </li>
            <li>
              <Link href="/Shop" className="hover:text-orange-500 block md:inline-block">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Chef" className="hover:text-orange-500 block md:inline-block">
                Chef
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 block md:inline-block">
                Contact
              </Link>
            </li>
          </ul>
          <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-2 md:space-x-4 mt-4 md:mt-0">
            <div className="relative flex-grow md:flex-grow-0 w-full md:w-auto">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-auto bg-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <div className="flex space-x-2 mt-2 md:mt-0">
              <Link href={"/ShoppingCart"}>
                {" "}
                <button className="bg-gray-800 p-2 rounded-full">
                  <FaShoppingBag />
                </button>
              </Link>
              <Link href={"/Signup"}>
                {" "}
                <button className="bg-gray-800 p-2 rounded-full">
                  <FaUser />
                </button>
              </Link>
              <Link href={"/Checkout"}>
                {" "}
                <button className="bg-gray-800 p-2 rounded-full">
                  <MdShoppingCartCheckout />
                </button>
              </Link>
            </div>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-40 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png?height=256&width=1920&text=Menu+Hero+Image"
          alt="Menu Hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center">Blogs</h1>
          <p className="text-xs md:text-base text-white mt-2">
            Home &gt; <span className="text-orange-400"> &nbsp; Blogs</span>
          </p>
        </div>
      </div>

      <div className="min-h-screen bg-pink-50/80">
        <div className="container mx-auto px-4 py-8 md:py-16">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="md:col-span-2 space-y-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <div className="relative">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width={800}
                      height={400}
                      className="w-full h-[200px] md:h-[400px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded">
                      <span className="text-sm">14</span>
                    </div>
                  </div>
                  <div className="p-4 md:p-6">
                    <div className="flex flex-wrap items-center gap-2 md:gap-4 text-xs md:text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1 md:gap-2">
                        <Calendar className="w-3 h-3 md:w-4 md:h-4" />
                        {post.date}/
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <BiComment className="w-3 h-3 md:w-4 md:h-4" />
                        {post.comments}/
                      </div>
                      <div className="flex items-center gap-1 md:gap-2">
                        <User className="w-3 h-3 md:w-4 md:h-4" />
                        {post.author}
                      </div>
                    </div>
                    <h2 className="text-xl md:text-2xl font-bold mb-4">
                      <Link href={`/blog/${post.id}`} className="hover:text-orange-500 transition-colors">
                        {post.title}
                      </Link>
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 mb-4">{post.description}</p>
                    <Link
                      href={`/Blog-detail/${post.id}`}
                      className="inline-flex items-center gap-2 text-orange-500 hover:gap-3 transition-all"
                    >
                      <button className="bg-white border-2 border-orange-500 w-full md:w-[172px] h-[52px] flex items-center justify-center gap-2">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </Link>
                  </div>
                </article>
              ))}
              <div className="flex justify-center items-center bg-transparent gap-2 md:gap-4">
                {paginationItems.map((item, index) => (
                  <div
                    key={index}
                    className={`w-8 h-8 md:w-12 md:h-12 flex items-center justify-center rounded ${
                      item.active ? "bg-orange-500 text-white" : "bg-gray-100 text-orange-500"
                    }`}
                  >
                    <span className="text-sm md:text-lg font-semibold">{item.id}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              <div className="flex items-center w-full max-w-lg border border-gray-300 rounded-md overflow-hidden">
                <input
                  type="text"
                  placeholder="Search Your Keyword.."
                  className="flex-grow px-4 w-full md:w-[300px] bg-transparent h-[60px] md:h-[90px] py-3 text-gray-600 focus:outline-none"
                />
                <button
                  className="flex items-center justify-center w-16 h-16 md:w-24 md:h-24 bg-orange-500"
                  style={{ backgroundColor: "#FFC107" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-6 h-6"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 19a8 8 0 100-16 8 8 0 000 16zm5-5l4 4" />
                  </svg>
                </button>
              </div>
              {/* Author Profile */}
              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm text-center">
                <Avatar className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-4">
                  <AvatarImage src="/admin.png?height=80&width=80" alt="Prince Miyako" />
                  <AvatarFallback>Admin</AvatarFallback>
                </Avatar>
                <h3 className="font-semibold text-sm md:text-base">Prince Miyako</h3>
                <p className="text-xs md:text-sm text-gray-500">Admin</p>
                <div className="flex justify-center gap-1 my-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-xs md:text-sm text-gray-500 mb-2">(1 Review)</p>
                <p className="text-xs md:text-sm text-gray-600 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies tortor ac ligula pulvinar.
                </p>
                <div className="flex justify-center gap-4">
                  <Link href="#" className="text-gray-400 hover:text-orange-500">
                    <Facebook className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-orange-500">
                    <Instagram className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-orange-500">
                    <Twitter className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-orange-500">
                    <Image src={"/pin.png"} alt="pinterest" width={20} height={20} className="w-4 h-4 md:w-5 md:h-5" />
                  </Link>
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4 text-sm md:text-base">Recent Post</h3>
                <div className="space-y-4">
                  {recentPosts.map((post, index) => (
                    <Link key={index} href="#" className="flex gap-2 md:gap-4 group">
                      <Image
                        src={post.image || "/placeholder.svg"}
                        alt={post.title}
                        width={60}
                        height={60}
                        className="rounded object-cover"
                      />
                      <div>
                        <h4 className="text-xs md:text-sm font-medium group-hover:text-orange-500 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-500">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <h3 className="font-semibold mb-4 text-sm md:text-base">Filter By Menu</h3>
                <div className="space-y-4">
                  {menuCategories.map((category) => (
                    <div key={category.name} className="flex items-center justify-between">
                      <div className="flex items-center gap-2 md:gap-3">
                        <Image
                          src={category.image || "/placeholder.svg"}
                          alt={category.name}
                          width={40}
                          height={40}
                          className="rounded object-cover"
                        />
                        <Link href="#" className="text-xs md:text-sm text-gray-600 hover:text-orange-500">
                          {category.name}
                        </Link>
                      </div>
                      <span className="text-xs md:text-sm text-gray-500">{category.count}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <Image src={"/tags.png"} alt="tags" width={325} height={244} className="w-full h-auto" />
              </div>

              <div className="bg-white p-4 md:p-6 rounded-lg shadow-sm">
                <div className="mb-4 md:mb-8">
                  <Image
                    src="/Photo.png?height=100&width=100"
                    alt="Gallery image"
                    width={1200}
                    height={600}
                    className="rounded object-cover w-full h-auto"
                  />
                </div>
                <h2 className="font-semibold mb-4 md:mb-6 mt-2 md:mt-4 ml-2 md:ml-6 text-sm md:text-base">Follow us</h2>

                <div className="flex justify-center">
                  <Image
                    src={"/icin.png"}
                    alt="icons"
                    width={308}
                    height={47}
                    className="w-full h-auto max-w-[308px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Blogs

