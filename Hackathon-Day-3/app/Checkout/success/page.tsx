'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import Footer from '@/components/footer'
import { useCart } from '@/context/CartContext'
import { getTrackingInfo } from '@/lib/shipping'
import { Loader2 } from 'lucide-react'
import Header from '@/components/header'

interface TrackingInfo {
  status: string;
  location: string;
  timestamp: string;
  details: {
    status: string;
    location: string;
    timestamp: string;
  }[];
}

export default function SuccessPage() {
  const { clearCart } = useCart()
  const searchParams = useSearchParams()
  const trackingCode = searchParams.get('tracking')
  const [trackingInfo, setTrackingInfo] = useState<TrackingInfo | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  useEffect(() => {
    async function fetchTrackingInfo() {
      if (!trackingCode) {
        setIsLoading(false)
        return
      }

      try {
        const info = await getTrackingInfo(trackingCode)
        setTrackingInfo(info)
      } catch (err) {
        setError('Unable to fetch tracking information at this time')
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchTrackingInfo()
  }, [trackingCode])

  return (
    <div className="min-h-screen">
      <Header />

      <div className="relative h-48 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png"
          alt="Success Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Order Confirmed</h1>
          <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Success</span></p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-2">Thank you for your order!</h2>
            <p className="text-gray-600">Your order has been confirmed and will be shipped soon.</p>
          </div>

          {trackingCode && (
            <div className="bg-gray-50 rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Tracking Information</h3>
              {isLoading ? (
                <div className="flex items-center justify-center py-4">
                  <Loader2 className="h-6 w-6 animate-spin text-orange-500" />
                </div>
              ) : error ? (
                <p className="text-red-500 text-center">{error}</p>
              ) : trackingInfo ? (
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Tracking Number:</span>
                    <span className="font-mono">{trackingCode}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Status:</span>
                    <span>{trackingInfo.status}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="font-medium">Current Location:</span>
                    <span>{trackingInfo.location}</span>
                  </div>
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Tracking History</h4>
                    <div className="space-y-3">
                      {trackingInfo.details.map((detail, index) => (
                        <div key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 mt-2 bg-orange-500 rounded-full"></div>
                          <div className="flex-1">
                            <p className="font-medium text-sm">{detail.status}</p>
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
            </div>
          )}

          <div className="flex justify-center gap-4">
            <Link
              href="/"
              className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Continue Shopping
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

