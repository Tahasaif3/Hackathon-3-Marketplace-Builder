"use client"

import { useEffect, useState, Suspense } from "react"
import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import Footer from "@/components/footer"
import { useCart } from "@/context/CartContext"
import { getTrackingInfo } from "@/lib/shipping"
import { getOrderData } from "@/lib/orderstorage"
import { Loader2, Search, CheckCircle2, Package } from "lucide-react"
import { MdShoppingCartCheckout } from "react-icons/md"
import { FaShoppingBag, FaUser } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import OrderReceipt from "@/components/Order-Reciept"

interface TrackingInfo {
  status: string
  location: string
  timestamp: string
  details: {
    status: string
    location: string
    timestamp: string
  }[]
}

function SuccessPageContent() {
  const { clearCart } = useCart()
  const searchParams = useSearchParams()
  const trackingCode = searchParams.get("tracking")
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [orderData, setOrderData] = useState<any>(null)
  const [hasCartBeenCleared, setHasCartBeenCleared] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  useEffect(() => {
    if (!hasCartBeenCleared) {
      clearCart() // Only call once
      setHasCartBeenCleared(true) // Prevent subsequent calls
    }
  }, [hasCartBeenCleared])

  useEffect(() => {
    let intervalId: NodeJS.Timeout

    async function fetchTrackingInfo() {
      if (!trackingCode) {
        setIsLoading(false)
        return
      }

      try {
        const info = await getTrackingInfo(trackingCode)
        setTrackingInfo(info)
      } catch (err) {
        setError("Unable to fetch tracking information at this time")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    // Initial fetch
    fetchTrackingInfo()

    intervalId = setInterval(fetchTrackingInfo, 30000)

    return () => {
      if (intervalId) {
        clearInterval(intervalId)
      }
    }
  }, [trackingCode])

  useEffect(() => {
    const data = getOrderData()
    if (data) {
      setOrderData(data)
    }
  }, [])

  // Calculate order totals
  //@ts-expect-error: error
  const subtotal = orderData?.items.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0
  const shipping = orderData?.shipping_cost || 0
  const tax = subtotal * 0.1
  const orderTotal = subtotal + shipping + tax
  console.log(orderTotal)

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <span className="text-orange-500 font-bold text-2xl">Food</span>luck
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>
          <ul
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}
          >
            <br />
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Menu" className="hover:text-orange-500">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="hover:text-orange-500">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Pages" className="hover:text-orange-500">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-orange-500">
                About
              </Link>
            </li>
            <li>
              <Link href="/Shop" className="hover:text-orange-500">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Chef" className="hover:text-orange-500">
                Chef
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/track-order" className="hover:text-orange-500">
                Track Order
              </Link>
            </li>
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
        <Image src="/heroo.png" alt="Success Hero" fill className="object-cover" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Order Confirmed</h1>
          <p className="text-sm md:text-base text-white mt-2">
            Home &gt; <span className="text-orange-400"> &nbsp; Success</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <Card className="mb-8">
            <CardHeader className="text-center pb-4">
              <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600" />
              </div>
              <CardTitle className="text-2xl font-bold">Thank you for your order!</CardTitle>
              <p className="text-gray-600 mt-2">Your order has been confirmed and will be shipped soon.</p>
            </CardHeader>
          </Card>

          {error && (
            <Alert variant="destructive" className="mb-8">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <Tabs defaultValue="tracking" className="mb-8">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="tracking">Tracking</TabsTrigger>
              <TabsTrigger value="receipt">Receipt</TabsTrigger>
            </TabsList>
            <TabsContent value="tracking">
              {trackingCode && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl">Tracking Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {isLoading ? (
                      <div className="flex items-center justify-center py-8">
                        <Loader2 className="h-8 w-8 animate-spin text-orange-500" />
                      </div>
                    ) : trackingInfo ? (
                      <div className="space-y-6">
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-500">Tracking Number</p>
                            <p className="font-mono text-lg">{trackingCode}</p>
                          </div>
                          <div className="space-y-2">
                            <p className="text-sm font-medium text-gray-500">Status</p>
                            <div className="flex items-center gap-2">
                              <Package className="h-5 w-5 text-orange-500" />
                              <p className="font-medium">{trackingInfo.status}</p>
                            </div>
                          </div>
                        </div>

                        <Separator />

                        <div>
                          <h3 className="font-semibold mb-4">Tracking History</h3>
                          <div className="space-y-4">
                            {trackingInfo.details.map((detail, index) => (
                              <div key={index} className="relative pl-6 pb-4 last:pb-0">
                                <div className="absolute left-0 top-2 w-2 h-2 bg-orange-500 rounded-full"></div>
                                {index !== trackingInfo.details.length - 1 && (
                                  <div className="absolute left-[3px] top-4 w-0.5 h-full bg-gray-200"></div>
                                )}
                                <div className="ml-2">
                                  <p className="font-medium">{detail.status}</p>
                                  <p className="text-sm text-gray-500">
                                    {detail.location} - {new Date(detail.timestamp).toLocaleString()}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              )}
            </TabsContent>
            <TabsContent value="receipt">
              {orderData ? (
                <OrderReceipt orderData={orderData} />
              ) : (
                <div className="text-center py-8 text-gray-500">Order information not available</div>
              )}
            </TabsContent>
          </Tabs>

          <div className="flex justify-center">
            <Button asChild className="bg-orange-500 hover:bg-orange-600">
              <Link href="/">Continue Shopping</Link>
            </Button>
            <div className="ml-4">
              <Button asChild className="bg-orange-500 hover:bg-orange-600">
                <Link href="/track-order">Track Order</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SuccessPageContent />
    </Suspense>
  )
}
