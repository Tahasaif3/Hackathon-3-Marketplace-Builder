"use client"

import Image from "next/image"
import { useState } from "react"
import { urlFor } from "@/lib/sanity"
import type { Product } from "@/types/product"
import { Star, Minus, Plus, ShoppingCart, Heart } from "lucide-react"
import { Search } from "lucide-react"
import { FaShoppingBag, FaUser } from "react-icons/fa"
import { MdShoppingCartCheckout } from "react-icons/md"
import { AiOutlineMenu } from "react-icons/ai"
import Footer from "@/components/footer"
import ShareComponent from "@/components/ShareUrl"
import SimilarProducts from "./similiar-product"
import Link from "next/link"
import { useCart } from "@/context/CartContext"
import { useWishlist } from "../../../context/WishlistContext"
import ReviewsComponent from "@/components/ReviewsandRating"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; 

export default function ProductDetailClient({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1)
  const [selectedImage, setSelectedImage] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { addToCart } = useCart()
  const { addToWishlist } = useWishlist()

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  console.log(isMenuOpen)

  const incrementQuantity = () => setQuantity((prev) => prev + 1)
  const decrementQuantity = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))

  const images = product.image ? (Array.isArray(product.image) ? product.image : [product.image]) : []

  const handleAddToCart = () => {
    //@ts-expect-error:error solved
    addToCart({ ...product, quantity })
    toast.success("Product added to cart")
  }

  const handleAddToWishlist = () => {
    addToWishlist(product)
    toast.success("Product added to wishlist")
  }

  return (
    <div className="bg-white min-h-screen">
   <ToastContainer />
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-xl md:text-2xl">
            <span className="text-orange-500 font-bold">Food</span>luck
          </div>

          <button className="md:hidden text-white" onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>
          <ul
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-y-2 md:space-y-0 md:space-x-4 lg:space-x-6 text-white justify-center items-center w-full md:w-auto mt-4 md:mt-0`}
          >
            <li>
              <Link href="/" className="hover:text-orange-500 block md:inline-block">
                Home
              </Link>
            </li>
            <li>
              <Link href="/Menu" className="hover:text-orange-500 block md:inline-block">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/Blog" className="hover:text-orange-500 block md:inline-block">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/Pages" className="hover:text-orange-500 block md:inline-block">
                Pages
              </Link>
            </li>
            <li>
              <Link href="/About" className="hover:text-orange-500 block md:inline-block">
                About
              </Link>
            </li>
            <li>
              <Link href="/Shop" className="hover:text-orange-500 block md:inline-block">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/Chef" className="hover:text-orange-500 block md:inline-block">
                Chef
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500 block md:inline-block">
                Contact
              </Link>
            </li>
          </ul>
          <div className="w-full md:w-auto flex flex-wrap items-center justify-between md:justify-end space-x-2 md:space-x-4 mt-4 md:mt-0">
            <div className="relative flex-grow md:flex-grow-0">
              <input
                type="text"
                placeholder="Search..."
                className="w-full md:w-auto bg-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <Link href={"/ShoppingCart"}>
              {" "}
              <button className="bg-gray-800 p-2 rounded-full">
                <FaShoppingBag />
              </button>
            </Link>
            <Link href={"/Signup"}>
              {" "}
              <button className="bg-gray-800 p-2 rounded-full">
                <FaUser />
              </button>
            </Link>
            <Link href={"/Checkout"}>
              {" "}
              <button className="bg-gray-800 p-2 rounded-full">
                <MdShoppingCartCheckout />
              </button>
            </Link>
          </div>
        </nav>
      </header>
      <div className="relative h-40 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png?height=256&width=1920&text=Menu+Hero+Image"
          alt="Menu Hero"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center">Shop Details</h1>
          <p className="text-xs md:text-base text-white mt-2">
            Home &gt; <span className="text-orange-400"> &nbsp; Shop Details</span>
          </p>
        </div>
      </div>

      <main className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/12">
            {images.map((img, index) => (
              <div
                key={index}
                className={`mb-4 cursor-pointer ${selectedImage === index ? "border-2 border-orange-500" : ""}`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={urlFor(img).url() || "/placeholder.svg"}
                  alt={`${product.name} thumbnail ${index + 1}`}
                  width={100}
                  height={100}
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          <div className="md:w-5/12">
            <Image
              src={urlFor(images[selectedImage]).url() || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="rounded-lg object-cover w-full"
            />
          </div>

          <div className="md:w-6/12">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">{product.description}</p>

            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-orange-500">${product.price.toFixed(2)}</span>
              {product.originalPrice && product.originalPrice > product.price && (
                <span className="ml-2 text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              )}
            </div>

            <div className="flex items-center mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 fill-orange-500 text-orange-500" />
              ))}
              <span className="ml-2 text-gray-600">(22 Reviews)</span>
            </div>

            <div className="flex items-center mb-6">
              <button onClick={decrementQuantity} className="bg-gray-200 p-2 rounded-l-full">
                <Minus className="w-4 h-4" />
              </button>
              <span className="bg-gray-200 px-4 py-2">{quantity}</span>
              <button onClick={incrementQuantity} className="bg-gray-200 p-2 rounded-r-full">
                <Plus className="w-4 h-4" />
              </button>
              <button
                className="ml-4 bg-orange-500 text-white py-2 px-6 rounded-full flex items-center"
                onClick={handleAddToCart}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
              <button className="ml-4 border border-gray-300 p-2 rounded-full" onClick={handleAddToWishlist}>
                <Heart className="w-5 h-5" />
              </button>
            </div>

            <div className="mb-6">
              <p className="font-semibold mb-2">
                Category: <span className="font-normal">{product.category}</span>
              </p>
              <p className="font-semibold mb-2">
                Tags:
                {product.tags &&
                  product.tags.map((tag, index) => (
                    <span key={index} className="font-normal ml-1">
                      #{tag}
                    </span>
                  ))}
              </p>
              <p className="font-semibold">
                <ShareComponent />
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Description</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Key Benefits</h2>
          <ul className="list-disc pl-5 text-gray-600">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
            <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
            <li>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</li>
          </ul>
        </div>

        <div>
          <SimilarProducts currentProductId={product._id} />
        </div>
        <div className="mt-10">
          <ReviewsComponent />
        </div>
      </main>

      <Footer />
    </div>
  )
}

