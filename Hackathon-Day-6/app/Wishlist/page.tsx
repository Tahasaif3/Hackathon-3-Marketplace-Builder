'use client'

import { useWishlist } from '../../context/WishlistContext';
import { useState } from 'react';
import Image from 'next/image';
import { urlFor } from '@/lib/sanity';
import Link from 'next/link';
import { Search, ShoppingCart, Trash2 } from 'lucide-react';
import { FaShoppingBag, FaUser } from 'react-icons/fa';
import { AiOutlineMenu } from 'react-icons/ai';

export default function WishlistPage() {
  const { wishlist, removeFromWishlist, moveToCart } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className='min-h-screen'>
      {/* Header */}
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <span className="text-orange-500 font-bold text-2xl">Food</span>luck
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
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
            <Link href="/ShoppingCart">
              <button className="bg-gray-800 p-2 rounded-full">
                <FaShoppingBag />
              </button>
            </Link>
            <Link href="/profile">
              <button className="bg-gray-800 p-2 rounded-full">
                <FaUser />
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-48 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png"
          alt="Track Order Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Wishlist</h1>
          <p className="text-sm md:text-base text-white mt-2">
            Home &gt; <span className="text-orange-400">My Wishlist</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">My Wishlist</h1>
        {wishlist.length === 0 ? (
          // <p>Your wishlist is empty.</p>
          <div className="flex flex-col items-center justify-center mt-16">
            <div className="text-orange-500 mb-6">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-24 h-24"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 3h18M9 7h6M9 11h6M9 15h6M9 19h6"
      />
    </svg>
  </div>

            <p className="text-gray-700 text-lg md:text-xl font-semibold mb-4">
              Your wishlist is empty.
            </p>
            <p className="text-gray-500 text-center max-w-md mb-6">
              Browse our delicious menu and add your favorite meals to your wishlist. We'll keep them ready for you!
            </p>
            <Link
              href="/Menu"
              className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all transform hover:scale-105"
            >
              Browse Menu
            </Link>
          </div>

        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {wishlist.map((product) => (
              <div key={product._id} className="border rounded-lg p-4 flex flex-col">
                <Image
                  src={urlFor(product.image).url() || "/placeholder.svg"}
                  alt={product.name}
                  width={300}
                  height={300}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-2">${product.price.toFixed(2)}</p>
                <div className="mt-auto flex justify-between">
                  <button
                    onClick={() => moveToCart(product)}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Move to Cart
                  </button>
                  <button
                    onClick={() => removeFromWishlist(product._id)}
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors flex items-center"
                  >
                    <Trash2 className="w-5 h-5 mr-2" />
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <Link
          href="/Shop"
          className="flex justify-center items-center mt-10 bg-gradient-to-r from-red-500 to-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:opacity-90 transition-all transform hover:scale-105"
        >
          Continue Shopping
        </Link>

      </div>
    </div>
  );
}

