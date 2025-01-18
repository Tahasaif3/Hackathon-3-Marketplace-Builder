"use client"

import { useState } from "react";
import { Lock, Mail, Search } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import { FaApple, FaGoogle, FaShoppingBag, FaUser } from "react-icons/fa";
import { MdShoppingCartCheckout } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { login } = useAuth();
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleSignin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await login(email, password);
      router.push('/dashboard');
    } catch (error) {
      setError((error as Error).message);
    }
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
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Sign-in Page</h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Sign-in</span></p>
        </div>
      </div>

      {/* Signin Form */}
      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-3xl font-bold whitespace-nowrap md:text-4xl sm:text:md mb-5">Sign in</h2>
          {error && <p className="text-red-500 mb-4">{error}</p>}
          <form onSubmit={handleSignin}>
            <div className="mb-4 relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <div className="mb-6 relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            >
              Sign in
            </button>
            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FaGoogle width={20} height={20} className="mr-2" />
                Sign in with Google
              </button>
              <button className="flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FaApple width={20} height={20} className="mr-2" />
                Sign in with Apple
              </button>
            </div>
          </form>
          <div className="mt-4 text-center">
            <Link href="/forgot-password" className="text-sm text-orange-500 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="mt-4 text-center">
            <Link href="/Signup" className="text-sm text-orange-500 hover:underline">
              Don`t have an account? Sign up
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
