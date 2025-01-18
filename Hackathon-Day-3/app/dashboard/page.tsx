"use client"

import { useState, useEffect } from "react";
import { Search, LogOut } from 'lucide-react';
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/footer";
import { FaShoppingBag } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
}

export default function DashboardPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    if (!user) {
      router.push('/signin');
    } else {
      const mockOrders: Order[] = [
        { id: '1', date: '2023-05-01', status: 'Delivered', total: 50.99 },
        { id: '2', date: '2023-05-05', status: 'Processing', total: 35.50 },
        { id: '3', date: '2023-05-10', status: 'Shipped', total: 75.25 },
      ];
      setOrders(mockOrders);
    }
  }, [user, router]);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    router.push('/Signin');
  };

  if (!user) {
    return null;
  }

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
            <button onClick={handleLogout} className="bg-gray-800 p-2 rounded-full">
              <LogOut />
            </button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-48 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png?height=256&width=1920&text=Dashboard+Hero+Image"
          alt="Dashboard Hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Dashboard</h1>
          <p className='text-sm md:text-base text-white mt-2'>Welcome, {user.name}</p>
        </div>
      </div>

      {/* Dashboard Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {orders.map((order) => (
                  <tr key={order.id}>
                    <td className="px-6 py-4 whitespace-nowrap">{order.id}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.date}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{order.status}</td>
                    <td className="px-6 py-4 whitespace-nowrap">${order.total.toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

