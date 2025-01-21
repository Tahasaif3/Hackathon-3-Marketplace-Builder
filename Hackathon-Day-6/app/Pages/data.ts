import { Product, GiftCard, Feedback } from './types'

let products: Product[] = [
  { _id: '1', name: 'Burger', image: '/burger.png', originalPrice: 10, discountedPrice: 8 },
  { _id: '2', name: 'Pizza', image: '/pizza.png', originalPrice: 15, discountedPrice: 12 },
  { _id: '3', name: 'Muffin', image: '/muffin.png', originalPrice: 8, discountedPrice: 6 },
  { _id: '4', name: 'Chick Pears', image: '/food1.png', originalPrice: 16, discountedPrice: 12 },
]

let giftCards: GiftCard[] = []

let feedback: Feedback[] = []

export const fetchDiscountedProducts = (): Promise<Product[]> => {
  return Promise.resolve(products)
}

export const fetchGiftCards = (): Promise<GiftCard[]> => {
  return Promise.resolve(giftCards)
}

export const purchaseGiftCard = (amount: number): Promise<void> => {
  const newCard: GiftCard = {
    id: String(giftCards.length + 1),
    code: `GIFT${amount}`,
    balance: amount,
  }
  giftCards.push(newCard)
  return Promise.resolve()
}

export const redeemGiftCard = (code: string): Promise<void> => {
  const cardIndex = giftCards.findIndex(card => card.code === code)
  if (cardIndex !== -1) {
    giftCards[cardIndex].balance = 0
  }
  return Promise.resolve()
}

export const submitFeedback = (newFeedback: Omit<Feedback, 'id'>): Promise<Feedback> => {
  const feedbackWithId: Feedback = {
    ...newFeedback,
    id: String(feedback.length + 1),
  }
  feedback.push(feedbackWithId)
  return Promise.resolve(feedbackWithId)
}

export const fetchFeedback = (): Promise<Feedback[]> => {
  return Promise.resolve(feedback)
}

