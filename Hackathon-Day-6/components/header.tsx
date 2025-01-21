import { Link, Search } from 'lucide-react'
import React, { useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { MdShoppingCartCheckout } from 'react-icons/md'

function Header() {
   const [isMenuOpen, setIsMenuOpen] = useState(false)
   
   const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  return (
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
                <Link href="/ShoppingCart">
                  <button className="bg-gray-800 p-2 rounded-full">
                    <FaShoppingBag />
                  </button>
                </Link>
                <Link href="/Signup">
                  <button className="bg-gray-800 p-2 rounded-full">
                    <FaUser />
                  </button>
                </Link>
                <Link href="/Checkout">
                  <button className="bg-gray-800 p-2 rounded-full">
                    <MdShoppingCartCheckout />
                  </button>
                </Link>
              </div>
            </nav>
          </header>
  )
}

export default Header