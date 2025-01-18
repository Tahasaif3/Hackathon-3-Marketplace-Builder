import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Link from 'next/link'
import { ShippingRate, ShippingFormData } from '@/types/shipping'

interface ShippingFormProps {
  onSubmit: (data: ShippingFormData) => Promise<void>
  shippingRates: ShippingRate[]
  selectedRate: ShippingRate | null
  setSelectedRate: (rate: ShippingRate) => void
  isLoading: boolean
}

export default function ShippingForm({ 
  onSubmit, 
  shippingRates, 
  selectedRate, 
  setSelectedRate, 
  isLoading 
}: ShippingFormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<ShippingFormData>()
  const [sameAsBilling, setSameAsBilling] = useState(true)

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
        <div className="grid gap-4">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                First name
              </label>
              <input
                {...register("firstName", { required: "First name is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                Last name
              </label>
              <input
                {...register("lastName", { required: "Last name is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email address
            </label>
            <input
              {...register("email", { 
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email address"
                }
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">
              Address
            </label>
            <input
              {...register("address", { required: "Address is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
            />
            {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="city" className="block text-sm font-medium text-gray-700 mb-1">
                City
              </label>
              <input
                {...register("city", { required: "City is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
            </div>
            <div>
              <label htmlFor="zipCode" className="block text-sm font-medium text-gray-700 mb-1">
                Zip code
              </label>
              <input
                {...register("zipCode", { required: "Zip code is required" })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
              />
              {errors.zipCode && <p className="mt-1 text-sm text-red-600">{errors.zipCode.message}</p>}
            </div>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Shipping Options</h2>
        <div className="space-y-2">
          {shippingRates.map((rate) => (
            <label key={rate.id} className="flex items-center space-x-3">
              <input
                type="radio"
                name="shippingRate"
                checked={selectedRate?.id === rate.id}
                onChange={() => setSelectedRate(rate)}
                className="form-radio h-5 w-5 text-orange-600"
              />
              <span className="text-sm font-medium text-gray-900">{rate.service}</span>
              <span className="text-sm text-gray-500">${rate.rate.toFixed(2)} - {rate.estimatedDays}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-xl font-semibold mb-4">Billing Address</h2>
        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="sameAsBilling"
            checked={sameAsBilling}
            onChange={() => setSameAsBilling(!sameAsBilling)}
            className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
          />
          <label htmlFor="sameAsBilling" className="text-sm text-gray-700">
            Same as shipping address
          </label>
        </div>
      </div>

      <div className="flex justify-between pt-4 flex-wrap gap-4">
        <Link
          href="/cart"
          className="py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
        >
          Back to cart
        </Link>
        <button 
          type="submit" 
          className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 disabled:opacity-50"
          disabled={isLoading || !selectedRate}
        >
          {isLoading ? 'Processing...' : 'Place Order'}
        </button>
      </div>
    </form>
  )
}

