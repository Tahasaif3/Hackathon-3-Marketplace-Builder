'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Search } from 'lucide-react'
import { FaFacebookF, FaPinterestP, FaShoppingBag, FaTwitter } from 'react-icons/fa'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { RiArrowDropDownLine } from 'react-icons/ri'

export default function HeroSection() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="container mx-auto px-4">
        <div className="pt-8 pb-4 text-center">
          <Link href="/" className="inline-block text-2xl font-bold">
            <span className="text-orange-500">Food</span>tuck
          </Link>
        </div>

        {/* Navbar */}
        <nav className="relative">
          <div className="flex justify-between items-center py-6">
            {/* Toggle button for mobile responsiveness */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-white z-50 relative"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? (
                <AiOutlineClose className="w-6 h-6" />
              ) : (
                <AiOutlineMenu className="w-6 h-6" />
              )}
            </button>

            {/* Desktop navbar */}
            <ul className="hidden md:flex space-x-6 text-white justify-center items-center">
              <li><Link href="/" className="hover:text-orange-500 underline decoration-orange-500 decoration-4">Home</Link></li>
              <li><Link href="/Menu" className="hover:text-orange-500">Menu</Link></li>
              <li><Link href="/Blog" className="hover:text-orange-500">Blog</Link></li>
              <li><Link href="/Pages" className="hover:text-orange-500">Pages</Link></li>
              <li>
                <Link href="/About" className="inline-flex items-center hover:text-orange-500">
                  About
                  <RiArrowDropDownLine className="text-lg" />
                </Link>
              </li>
              <li><Link href="/Shop" className="hover:text-orange-500">Shop</Link></li>
              <li><Link href="/Chef" className="hover:text-orange-500">Chef</Link></li>
              <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
            </ul>

            {/* Search and Cart */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search..."
                  className="bg-gray-800/50 rounded-full py-2.5 px-5 pr-12 focus:outline-none focus:ring-2 focus:ring-orange-500 w-[200px] text-sm"
                />
                <Search className="absolute right-4 top-2.5 text-gray-400" size={20} />
              </div>
              <Link href="/ShoppingCart">
                <button className="bg-gray-800 p-2 rounded-full">
                  <FaShoppingBag />
                </button>
              </Link>
            </div>
          </div>

          {/* Mobile Navbar */}
          {isMobile && (
            <div
              className={`md:hidden fixed inset-0 bg-black bg-opacity-90 z-50 transition-opacity duration-300 ${
                isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
              }`}
            >
              <button
                onClick={closeMenu}
                className="absolute top-4 right-4 text-white"
                aria-label="Close menu"
              >
                <AiOutlineClose className="w-6 h-6" />
              </button>
              <div className="flex flex-col items-center justify-center h-full">
                <ul className="flex flex-col items-center space-y-4">
                  <li><Link href="/" className="text-2xl hover:text-orange-500 transition-colors" onClick={closeMenu}>Home</Link></li>
                  <li><Link href="/Menu" className="text-2xl hover:text-orange-500 transition-colors" onClick={closeMenu}>Menu</Link></li>
                  <li><Link href="/Blog" className="text-2xl hover:text-orange-500 transition-colors" onClick={closeMenu}>Blog</Link></li>
                  <li><Link href="/Pages" className="text-2xl hover:text-orange-500 transition-colors" onClick={closeMenu}>Pages</Link></li>
                  <li><Link href="/About" className="text-2xl hover:text-orange-500 transition-colors" onClick={closeMenu}>About</Link></li>
                  <li><Link href="/Shop" className="text-2xl hover:text-orange-500 transition-colors" onClick={closeMenu}>Shop</Link></li>
                  <li><Link href="/Chef" className="text-2xl hover:text-orange-500 transition-colors" onClick={closeMenu}>Chef</Link></li>
                  <li><Link href="/contact" className="text-2xl hover:text-orange-500 transition-colors" onClick={closeMenu}>Contact</Link></li>
                </ul>
              </div>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <div
          className="relative bg-cover bg-center"
          style={{
            backgroundImage: `url('/bg.png')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-80"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center py-16 md:py-24 relative z-10">
            <div className="space-y-6 text-center mr-10 md:text-left">
              <div className="flex justify-center items-center">
                {/* Social Icons with Lines */}
                <div className="hidden md:flex flex-col items-center gap-6">
                  {/* Top Line */}
                  <div className="w-[2px] h-24 bg-white/60"></div>

                  {/* Icons */}
                  <div className="flex flex-col items-center gap-6">
                    {[
                      { icon: FaFacebookF, href: "#" },
                      { icon: FaTwitter, href: "#" },
                      { icon: FaPinterestP, href: "#" }
                    ].map(({ icon: Icon, href }, index) => (
                      <Link
                        key={index}
                        href={href}
                        className="flex justify-center items-center w-8 h-8 rounded-full bg-transparent hover:text-orange-500 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </Link>
                    ))}
                  </div>

                  {/* Bottom Line */}
                  <div className="w-[2px] h-24 bg-white/60"></div>
                </div>

                {/* Hero Content */}
                <div className="flex-1 ml-5">
                  <Image
                    src="/quick.png"
                    alt='Quick and amazing logo'
                    width={249}
                    height={40}
                    className="mx-auto md:mx-0"
                  />
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mt-6">
                    <span className="text-orange-500">The</span> Art of speed<br />
                    food Quality
                  </h1>
                  <p className="text-gray-400 max-w-md mt-6">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Varius sed pharetra dictum neque massa congue
                  </p>
                  <button className="bg-orange-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 mt-8">
                    See Menu
                  </button>
                </div>
              </div>
            </div>

            {/* Image hero */}
            <div className="relative">
              <Image
                src="/heros.png"
                alt="Delicious Food"
                width={878}
                height={670}
                className="rounded-lg w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

