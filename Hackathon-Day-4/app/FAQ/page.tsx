'use client'

import { useState } from 'react'
import { Search } from 'lucide-react'
import Footer from '@/components/footer'
import Image from 'next/image'
import {FaShoppingBag, FaUser } from 'react-icons/fa'
import { MdAdd, MdShoppingCartCheckout } from 'react-icons/md'
import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaMinus } from 'react-icons/fa6'

const faqs = [
  {
    question: "How we serve food?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mollis ultrices non sodales nunc volutpat volutpat, eget. Eget egestas risus scelerisque pellentesque pulvinar. Nec sed enim sed."
  },
  {
    question: "How can we get in touch with you?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mollis ultrices non sodales nunc volutpat volutpat, eget. Eget egestas risus scelerisque pellentesque pulvinar. Nec sed enim sed."
  },
  {
    question: "How is our food quality?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mollis ultrices non sodales nunc volutpat volutpat, eget. Eget egestas risus scelerisque pellentesque pulvinar. Nec sed enim sed."
  },
  {
    question: "What will be delivered? And When?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mollis ultrices non sodales nunc volutpat volutpat, eget. Eget egestas risus scelerisque pellentesque pulvinar. Nec sed enim sed."
  },
  {
    question: "How do we give home delivery?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mollis ultrices non sodales nunc volutpat volutpat, eget. Eget egestas risus scelerisque pellentesque pulvinar. Nec sed enim sed."
  },
  {
    question: "Is this restaurant 24 hours open?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi quis mollis ultrices non sodales nunc volutpat volutpat, eget. Eget egestas risus scelerisque pellentesque pulvinar. Nec sed enim sed."
  }
]

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex w-full justify-between items-center text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        {isOpen ? (
          <FaMinus className="h-5 w-5 text-orange-500" />
        ) : (
          <MdAdd className="h-5 w-5 text-orange-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2">
          <p className="text-base text-gray-500">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function FAQPage() {
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
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}><br />
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
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">FAQ Page</h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; FAQ</span></p>
        </div>
      </div>
      <main className="container mx-auto px-4 py-12 mb-20">
        <h2 className="text-3xl font-bold text-center mb-8">Questions Looks Here</h2>
        <p className="text-center text-gray-600 mb-8">Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
        <div className="grid md:grid-cols-2 gap-8 bg-[#fff1f1] p-8 rounded-lg">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

