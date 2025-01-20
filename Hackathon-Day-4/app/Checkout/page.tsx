'use client'

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { useRouter } from 'next/navigation'
import Footer from "@/components/footer"
import ShippingForm from "@/components/ShippingForm"
import OrderSummary from "@/components/OrderSummary"
import { useCart } from "@/context/CartContext"
import { getShippingRates } from "@/lib/shipping"
import { ShippingRate, ShippingFormData } from "@/types/shipping"
import { AiOutlineMenu } from "react-icons/ai"
import Link from "next/link"
import { Search } from 'lucide-react'
import { FaShoppingBag, FaUser } from "react-icons/fa"
import { MdShoppingCartCheckout } from "react-icons/md"
import { storeOrderData } from '@/lib/orderstorage'

export default function CheckoutPage() {
  const [shippingRates, setShippingRates] = useState<ShippingRate[]>([])
  const [selectedRate, setSelectedRate] = useState<ShippingRate | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const { cartItems, total } = useCart()
  const router = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  // Debounce function to prevent too many API calls
  const debounce = (func: Function, wait: number) => {
    let timeout: NodeJS.Timeout
    return (...args: any[]) => {
      clearTimeout(timeout)
      timeout = setTimeout(() => func(...args), wait)
    }
  }

  const fetchShippingRates = useCallback(
    debounce(async (address: Partial<ShippingFormData>) => {
      setIsLoading(true)
      try {
        const rates = await getShippingRates(address)
        setShippingRates(rates)
        if (rates.length > 0 && !selectedRate) {
          setSelectedRate(rates[0])
        }
      } catch (error) {
        console.error('Error loading shipping rates:', error)
        setShippingRates([])
      }
      setIsLoading(false)
    }, 500),
    [selectedRate]
  )

  const handleAddressChange = (address: Partial<ShippingFormData>) => {
    if (address.city && address.zipCode) {
      fetchShippingRates(address)
    }
  }

  // Load initial shipping rates
  useEffect(() => {
    fetchShippingRates({})
  }, [fetchShippingRates])

  const handleShippingSubmit = async (formData: ShippingFormData) => {
    if (!selectedRate) return;

    setIsLoading(true);
    try {
      const response = await fetch('/api/create-shipment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formData,
          selectedRate,
          cartItems,
        }),
      });

      const data = await response.json();
    
      if (data.success) {
        // Store order data before redirecting
        storeOrderData({
          orderNumber: `ORD${Date.now().toString(36).toUpperCase()}`,
          trackingNumber: data.tracking_code,
          orderDate: new Date().toISOString(),
          items: cartItems,
          shippingAddress: {
            name: `${formData.firstName} ${formData.lastName}`,
            address: formData.address,
            city: formData.city,
            zipCode: formData.zipCode,
          },
          totals: {
            subtotal: total,
            shipping: selectedRate.rate,
            tax: total * 0.1,
            total: total + selectedRate.rate + (total * 0.1),
          },
        });
      
        router.push(`/Checkout/success?tracking=${data.tracking_code}`);
      }
    } catch (error) {
      console.error('Error creating shipment:', error);
    }
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen">
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <span className="text-orange-500 font-bold text-2xl">Food</span>luck
          </div>

          <button
            className="md:hidden text-white"
            onClick={toggleMenu}
          >
            <AiOutlineMenu />
          </button>
          <ul className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}>
            <br/>       
            <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
            <li><Link href="/Menu" className="hover:text-orange-500">Menu</Link></li>
            <li><Link href="/Blog" className="hover:text-orange-500">Blog</Link></li>
            <li><Link href="/Pages" className="hover:text-orange-500">Pages</Link></li>
            <li><Link href="/About" className="hover:text-orange-500">About</Link></li>
            <li><Link href="/Shop" className="hover:text-orange-500">Shop</Link></li>
            <li><Link href="/Chef" className="hover:text-orange-500">Chef</Link></li>
            <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
            <li><Link href="/track-order" className="hover:text-orange-500">Track Order</Link></li>
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
                <FaShoppingBag className="text-white" />
              </button>
            </Link>
            <Link href="/Signup">
              <button className="bg-gray-800 p-2 rounded-full">
                <FaUser className="text-white" />
              </button>
            </Link>
            <Link href="/Checkout">
              <button className="bg-gray-800 p-2 rounded-full">
                <MdShoppingCartCheckout className="text-white" />
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <div className="relative h-48 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png"
          alt="Checkout Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Checkout</h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Checkout</span></p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <ShippingForm 
            onSubmit={handleShippingSubmit} 
            shippingRates={shippingRates}
            selectedRate={selectedRate}
            setSelectedRate={setSelectedRate}
            isLoading={isLoading}
            onAddressChange={handleAddressChange}
          />
          <OrderSummary 
            cartItems={cartItems} 
            total={total} 
            shippingCost={selectedRate?.rate ?? 0}
          />
        </div>
      </div>

      <Footer />
    </div>
  )
}