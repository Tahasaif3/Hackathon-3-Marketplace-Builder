export interface Product {
    _id: string
    name: string
    image: string
    originalPrice: number
    discountedPrice: number
  }
  
  export interface GiftCard {
    id: string
    code: string
    balance: number
  }
  
  export interface Feedback {
    id: string
    name: string
    email: string
    message: string
    createdAt: string
  }
  
  