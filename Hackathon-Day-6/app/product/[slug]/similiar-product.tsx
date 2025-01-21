'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { urlFor, client } from '@/lib/sanity'
import { Product } from '@/types/product'

export default function SimilarProducts({ currentProductId }: { currentProductId: string }) {
  const [similarProducts, setSimilarProducts] = useState<Product[]>([])

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      const products = await client.fetch(`
        *[_type == "food" && _id != $currentProductId][0...4]{
          _id,
          name,
          "slug": slug.current,
          price,
          image
        }
      `, { currentProductId })
      setSimilarProducts(products)
    }

    fetchSimilarProducts()
  }, [currentProductId])

  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {similarProducts.map((product) => (
          <Link href={`/product/${product.slug}`} key={product._id} className="group">
            <div className="relative overflow-hidden rounded-lg">
              <Image
                src={urlFor(product.image).url() || "/placeholder.svg"}
                alt={product.name}
                width={300}
                height={300}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold">View Product</span>
              </div>
            </div>
            <h3 className="mt-2 font-semibold">{product.name}</h3>
            <p className="text-orange-500">${product.price.toFixed(2)}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

