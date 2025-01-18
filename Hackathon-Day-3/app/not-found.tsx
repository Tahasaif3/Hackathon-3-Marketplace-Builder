"use client"

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { Search } from 'lucide-react'
import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'

export default function NotFoundPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-2xl"><span className="text-orange-500 font-bold text-2xl">Food</span>luck</div>

          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <AiOutlineMenu />
          </button>
          <ul
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}><br/>         
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/Menu" className="hover:text-orange-500">Menu</Link></li>
            <li><Link href="/Blog" className="hover:text-orange-500">Blog</Link></li>
            <li><Link href="/Pages" className="hover:text-orange-500">Pages</Link></li>
            <li><Link href="/About" className="hover:text-orange-500">About</Link></li>
            <li><Link href="/Shop" className="hover:text-orange-500">Shop</Link></li>
            <li><Link href="/Chef" className="hover:text-orange-500">Chef</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
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
            <Link href={"/ShoppingCart"}> <button className="bg-gray-800 p-2 rounded-full">
              <FaShoppingBag />
            </button></Link>
            <Link href={"/Signup"}> <button className="bg-gray-800 p-2 rounded-full">
              <FaUser />
            </button></Link>
            <Link href={"/Checkout"}> <button className="bg-gray-800 p-2 rounded-full">
              <MdShoppingCartCheckout />
            </button></Link>
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
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Not Found Page </h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp;Not-Found</span></p>
        </div>
      </div>



      <main className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-8xl font-bold text-orange-500 mb-4">404</h2>
        <h3 className="text-3xl font-semibold mb-4">Oops! Look likes something going wrong</h3>
        <p className="text-gray-600 mb-8">Page Cannot be found! Were sorry the page you requested could not be found.<br />Please go back to the homepage.</p>
        <Link href="/" className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 transition duration-300">
          Go to Home
        </Link>
      </main>

   
      <Footer />
    </div>
  )
}

