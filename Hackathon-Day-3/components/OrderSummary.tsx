import { urlFor } from '@/lib/sanity'
import Image from 'next/image'
import { CartItem } from '@/types/product'

interface OrderSummaryProps {
  cartItems: CartItem[]
  total: number
  shippingCost: number
}

export default function OrderSummary({ cartItems, total, shippingCost }: OrderSummaryProps) {
  const subtotal = total
  const tax = subtotal * 0.1
  const orderTotal = subtotal + shippingCost + tax

  return (
    <div className="bg-white rounded-lg border-2 border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
      
      {/* Cart Items */}
      <div className="space-y-4 mb-6">
        {cartItems.map((item) => (
          <div key={item._id} className="flex items-center gap-4">
            <div className="relative h-16 w-16 flex-shrink-0">
              <Image
                src={urlFor(item.image).url()}
                alt={item.name}
                fill
                className="rounded-md object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900 truncate">{item.name}</h3>
              <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
              <p className="text-sm font-medium text-gray-900">
                ${((item.salePrice || item.price) * item.quantity).toFixed(2)}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Price Breakdown */}
      <div className="space-y-2 pt-4 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-gray-900">${shippingCost.toFixed(2)}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax (10%)</span>
          <span className="font-medium text-gray-900">${tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-4 border-t border-gray-200">
          <span className="text-base font-semibold">Total</span>
          <span className="text-base font-semibold">${orderTotal.toFixed(2)}</span>
        </div>
      </div>

      {/* Additional Information */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <p className="text-sm text-gray-500">
          Shipping time depends on the selected shipping method and delivery location.
        </p>
        <p className="text-sm text-gray-500 mt-2">
          Tax may vary based on your location and local regulations.
        </p>
      </div>
    </div>
  )
}

