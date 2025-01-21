'use client'

import { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { Star, Minus, Plus, Search } from 'lucide-react'
import Footer from '@/components/footer'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { AiOutlineMenu } from 'react-icons/ai'
import { useCart } from '../../context/CartContext'
import { urlFor } from '../../lib/sanity'

export default function CartPage() {
  const { cartItems, updateQuantity, removeFromCart } = useCart()
  const [couponCode, setCouponCode] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shippingCharge = "Will be calculated at next step"
  const total = subtotal

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
          src="/heroo.png"
          alt="Menu Hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Shopping Cart Page</h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Shopping Cart</span></p>
        </div>
      </div>

    
      <main className="container mx-auto px-4 overflow-x-auto">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 mt-10">Shopping Cart</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden overflow-x-auto">
        <table className="w-full min-w-[640px]">
            <thead className="bg-white border-b">
              <tr>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Product</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Price</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Total</th>
                <th className="px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">Remove</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {cartItems.map((item) => (
                <tr key={item._id}>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10 sm:h-12 sm:w-12 relative">
                        <Image
                          src={urlFor(item.image).url()}
                          alt={item.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-md"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                        <div className="flex items-center">
                          {[...Array(5)].map((_, index) => (
                            <Star
                              key={index}
                              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                                index < 5 ? 'text-yellow-400 fill-current' : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${item.price.toFixed(2)}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center border rounded-md">
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity - 1)}
                        className="px-1 sm:px-2 py-1 text-gray-500 hover:text-gray-700"
                      >
                        <Minus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <span className="px-1 sm:px-2 py-1 text-sm text-gray-700">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item._id, item.quantity + 1)}
                        className="px-1 sm:px-2 py-1 text-gray-500 hover:text-gray-700"
                      >
                        <Plus className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">${(item.price * item.quantity).toFixed(2)}</div>
                  </td>
                  <td className="px-4 sm:px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="text-red-600 hover:text-red-900"
                    >
                      ×
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>

      <div className="mt-8 flex flex-col lg:flex-row justify-between mb-20">
        <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
          <h2 className="text-lg font-semibold mb-2">Coupon Code</h2>
          <p className="text-sm text-gray-600 mb-2">Enter your coupon code if you have one.</p>
          <div className="flex">
            <input
              type="text"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="flex-grow px-4 py-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter coupon code"
            />
            <button className="bg-orange-500 text-white px-4 py-2 rounded-r-md hover:bg-orange-600 transition duration-300">
              Apply
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/3">
          <h2 className="text-lg font-semibold mb-4">Total Bill</h2>
          <div className="bg-gray-50 p-4 rounded-md">
            <div className="flex justify-between mb-2">
              <span>Cart Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping Charge</span>
              <span>{shippingCharge}</span>
            </div>
            <div className="flex justify-between font-semibold">
              <span>Total Amount</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Link href="/Checkout">
          <button className="w-full mt-4 bg-orange-500 text-white py-2 rounded-md hover:bg-orange-600 transition duration-300">
            Proceed to Checkout
          </button>
          </Link>
        </div>
      </div>
    </main>

      <Footer />
    </div>
  )
}

