import { useState } from "react"
import type { GiftCard } from "../types"
import { purchaseGiftCard, redeemGiftCard } from "../data"

export default function GiftCardSection({ giftCards }: { giftCards: GiftCard[] }) {
  const [amount, setAmount] = useState("")
  const [code, setCode] = useState("")

  const handlePurchase = async () => {
    if (amount) {
      await purchaseGiftCard(Number.parseFloat(amount))
      setAmount("")
    }
  }

  const handleRedeem = async () => {
    if (code) {
      await redeemGiftCard(code)
      setCode("")
    }
  }
  return (
    <div className="mb-8 sm:mb-16 mt-8 sm:mt-48 max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 border-b pb-3">Gift Cards</h2>
      <div className="grid grid-cols-1 gap-6 sm:gap-8">
        {/* Purchase Gift Card */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">Purchase Gift Card</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Amount"
              className="w-full sm:flex-grow border border-gray-300 p-2 sm:p-3 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              onClick={handlePurchase}
              className="w-full sm:w-auto bg-blue-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-blue-600 transition"
            >
              Purchase
            </button>
          </div>
        </div>

        {/* Redeem Gift Card */}
        <div className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow-md">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">Redeem Gift Card</h3>
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
            <input
              type="text"
              value={code}
              onChange={(e) => setCode(e.target.value)}
              placeholder="Gift Card Code"
              className="w-full sm:flex-grow border border-gray-300 p-2 sm:p-3 rounded-md focus:ring-2 focus:ring-green-400 focus:outline-none"
            />
            <button
              onClick={handleRedeem}
              className="w-full sm:w-auto bg-green-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-md font-medium hover:bg-green-600 transition"
            >
              Redeem
            </button>
          </div>
        </div>
      </div>

      {/* Gift Card List */}
      <div className="mt-6 sm:mt-8">
        <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-3 sm:mb-4">Your Gift Cards</h3>
        {giftCards.length > 0 ? (
          <div className="space-y-3 sm:space-y-4">
            {giftCards.map((card) => (
              <div
                key={card.id}
                className="border border-gray-200 p-3 sm:p-4 rounded-lg shadow-sm hover:shadow-md transition"
              >
                <p className="text-sm sm:text-base text-gray-700 font-medium">
                  Code: <span className="text-gray-900">{card.code}</span>
                </p>
                <p className="text-sm sm:text-base text-gray-700 font-medium">
                  Balance: <span className="text-gray-900">${card.balance.toFixed(2)}</span>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-sm sm:text-base text-gray-500">You have no gift cards.</p>
        )}
      </div>
    </div>
  )
}

