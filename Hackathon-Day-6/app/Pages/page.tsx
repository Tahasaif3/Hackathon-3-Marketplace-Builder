'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import GiftCardSection from './components/GiftCardSection'
import DiscountedProducts from './components/DiscountedProducts'
import FeedbackForm from './components/FeedbackForm'
import { Product, GiftCard, Feedback } from './types'
import { fetchDiscountedProducts, fetchGiftCards, submitFeedback, fetchFeedback } from './data'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { Search } from 'lucide-react'
import { AiOutlineMenu } from 'react-icons/ai'
import Footer from '@/components/footer'

export default function CustomerHub() {
  const [ ,setDiscountedProducts] = useState<Product[]>([])
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [giftCards, setGiftCards] = useState<GiftCard[]>([])
  const [, setFeedback] = useState<Feedback[]>([])
  useEffect(() => {
    const loadData = async () => {
      const products = await fetchDiscountedProducts()
      const cards = await fetchGiftCards()
      const feedbackData = await fetchFeedback()
      setDiscountedProducts(products)
      setGiftCards(cards)
      setFeedback(feedbackData)
    }
    loadData()
  }, [])

  const handleFeedbackSubmit = async (newFeedback: Omit<Feedback, 'id'>) => {
    const submittedFeedback = await submitFeedback(newFeedback)
    setFeedback(prev => [...prev, submittedFeedback])
  }
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
};

  return (
         <div className='bg-white min-h-screen'>
                <header className="bg-black py-2">
                <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                    <div className="text-white font-bold text-xl md:text-2xl"><span className="text-orange-500 font-bold">Food</span>luck</div>

                    <button
                        className="md:hidden text-white"
                        onClick={toggleMenu}
                    >
                        <AiOutlineMenu />
                    </button>
                    <ul
                        className={`${isMenuOpen ? "block" : "hidden"} md:flex space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 text-white justify-center items-center w-full md:w-auto mt-4 md:mt-0`}>
                        <li><Link href="/" className="hover:text-orange-500 block md:inline-block">Home</Link></li>
                        <li><Link href="/Menu" className="hover:text-orange-500 block md:inline-block">Menu</Link></li>
                        <li><Link href="/Blog" className="hover:text-orange-500 block md:inline-block">Blog</Link></li>
                        <li><Link href="/Pages" className="hover:text-orange-500 block md:inline-block">Pages</Link></li>
                        <li><Link href="/About" className="hover:text-orange-500 block md:inline-block">About</Link></li>
                        <li><Link href="/Shop" className="hover:text-orange-500 block md:inline-block">Shop</Link></li>
                        <li><Link href="/Chef" className="hover:text-orange-500 block md:inline-block">Chef</Link></li>
                        <li><Link href="/contact" className="hover:text-orange-500 block md:inline-block">Contact</Link></li>
                    </ul>
                    <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-2 md:space-x-4 mt-4 md:mt-0">
                    <div className="relative flex-grow">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-auto bg-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
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
            <div className="relative h-40 md:h-64 bg-gray-800">
                <Image
                    src="/heroo.png?height=256&width=1920&text=Menu+Hero+Image"
                    alt="Menu Hero"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-2xl md:text-4xl font-bold text-white text-center">Customer Hub</h1>
                    <p className='text-xs md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400">&nbsp;Customer Hub</span></p>
                </div>
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Customer Hub</h1>
      
      <GiftCardSection giftCards={giftCards} />
    
      <DiscountedProducts/>
      
      <FeedbackForm onSubmit={handleFeedbackSubmit} />
      
    </div>
    <Footer/>
    </div>
    </div>
    
  )
}

