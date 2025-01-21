import { client } from '../../lib/sanity'
import { Product } from '../../types/product'
import ShopPageClient from './shop-page-client'

async function getProducts(): Promise<Product[]> {
  return client.fetch(`*[_type == "food"]{
    _id,
    name,
    "slug": slug.current,
    price,
    salePrice,
    image,
    "category": category->name,
    tags,
    description,
    available
  }`)
}

export default async function ShopPage() {
  const products = await getProducts()

  return <ShopPageClient products={products} />
}








