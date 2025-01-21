import foodData from '../data/food.json'

export function getAllProducts() {
  return foodData
}

export function getProductsByCategory(categories: string[]) {
  if (categories.length === 0) return foodData
  return foodData.filter(product => categories.includes(product.category))
}
