
export interface Product {
  _id: string
  name: string
  slug: string
  price: number
  originalPrice: number
  image: any
  description: string
  category: string
  tags?: string[]
  available: boolean
}



export interface CartItem extends Product {
  quantity: number;
}

