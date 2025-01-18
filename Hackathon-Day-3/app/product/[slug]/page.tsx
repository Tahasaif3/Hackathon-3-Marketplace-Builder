import { client } from '@/lib/sanity'
import { Product } from '@/types/product'
import ProductDetailClient from './product-detail-client'

async function getProduct(slug: string): Promise<Product> {
  return client.fetch(`*[_type == "food" && slug.current == $slug][0]{
    _id,
    name,
    "slug": slug.current,
    price,
    originalPrice,
    image,
    category,
    tags,
    description,
    available
  }`, { slug })
}

export default async function ProductPage({ params }: { params: { slug: string }}) {
  const product = await getProduct(params.slug)

  if (!product) {
    return <div>Product not found</div>
  }

  return <ProductDetailClient product={product} />
}

