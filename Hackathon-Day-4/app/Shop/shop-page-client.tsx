"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import type { Product } from "../../types/product"
import { urlFor, client } from "../../lib/sanity"
import Footer from "@/components/footer"
import { Search } from "lucide-react"
import { MdShoppingCartCheckout } from "react-icons/md"
import { FaShoppingBag, FaUser } from "react-icons/fa"
import { AiOutlineMenu } from "react-icons/ai"
import { PriceRangeFilter } from "@/components/price-range-filter"

const categories = [
  "Sandwiches",
  "Burger",
  "Chicken Chup",
  "Drink",
  "Pizza",
  "Thi",
  "Non Veg",
  "Uncategorized",
  "Dessert",
  "Main Course",
  "Appetizer",
  "Salad",
  "Breakfast",
  "Soup",
]

const latestProducts = [
  { name: "Pizza", price: 32.0, slug: "pizza" },
  { name: "Cupcake", price: 25.0, slug: "cupcake" },
  { name: "Chicken", price: 45.0, slug: "chicken" },
  { name: "Burger", price: 38.0, slug: "burger" },
]

const productTags = ["Services", "Our Menu", "Pizza", "Cupcake", "Burger", "Cookies", "Our Shop", "Tandoori Chicken"]

const getImageUrl = (source: any) => {
  if (!source) return "/placeholder.svg"
  try {
    const imageUrl = urlFor(source)
    return imageUrl ? imageUrl.url() : "/placeholder.svg"
  } catch (error) {
    console.error("Error generating image URL:", error)
    return "/placeholder.svg"
  }
}

export default function ShopPageClient({ products: initialProducts }: { products: Product[] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(12)
  const [sortBy, setSortBy] = useState("default")
  const [sidebarSearchQuery, setSidebarSearchQuery] = useState("")
  const [selectedCategories, setSelectedCategories] = useState<string[]>([])
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 8000])


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await client.fetch(`
          *[_type == "food"] {
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
          }
        `)
        setProducts(fetchedProducts)
      } catch (error) {
        console.error("Error fetching products:", error)
      }
    }

    fetchProducts()

    const subscription = client.listen('*[_type == "food"]').subscribe(() => {
      fetchProducts()
    })

    return () => subscription.unsubscribe()
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const handleCategoryChange = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]
      console.log("Selected categories:", newCategories)
      return newCategories
    })
  }

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category)
    const matchesSearch =
      !sidebarSearchQuery ||
      product.name.toLowerCase().includes(sidebarSearchQuery.toLowerCase()) ||
      (product.description && product.description.toLowerCase().includes(sidebarSearchQuery.toLowerCase())) ||
      (product.tags && product.tags.some((tag) => tag.toLowerCase().includes(sidebarSearchQuery.toLowerCase())))
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1]

    return matchesCategory && matchesSearch
  })

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === "price-low-high") return a.price - b.price
    if (sortBy === "price-high-low") return b.price - a.price
    return 0
  })

  const totalPages = Math.ceil(sortedProducts.length / itemsPerPage)
  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentProducts = sortedProducts.slice(indexOfFirstItem, indexOfLastItem)

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber)
  }

  const handleItemsPerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setItemsPerPage(Number(e.target.value))
    setCurrentPage(1)
  }

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value)
  }

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSidebarSearchQuery(e.target.value)
    setCurrentPage(1)
  }

  return (
    <div className="bg-white min-h-screen content-evenly">
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
            <Link href="/ShoppingCart">
              <button className="bg-gray-800 p-2 rounded-full">
                <FaShoppingBag />
              </button>
            </Link>
            <Link href="/Signup">
              <button className="bg-gray-800 p-2 rounded-full">
                <FaUser />
              </button>
            </Link>
            <Link href="/Checkout">
              <button className="bg-gray-800 p-2 rounded-full">
                <MdShoppingCartCheckout />
              </button>
            </Link>
          </div>
        </nav>
      </header>

      <div className="relative h-40 md:h-64 bg-gray-800">
        <Image src="/heroo.png" alt="Menu Hero" layout="fill" objectFit="cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center">Our Shop</h1>
          <p className="text-xs md:text-base text-white mt-2">
            Home &gt; <span className="text-orange-400">&nbsp;Shop</span>
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-12 md:mb-36">
        <div className="flex flex-col sm:flex-row justify-center sm:justify-between items-center mb-8 mt-8">
          <div className="flex items-center mb-4 sm:mb-0">
            <span className="mr-2 text-black text-sm md:text-base">Sort By:</span>
            <select
              className="bg-white border rounded p-1 md:p-2 text-black text-sm md:text-base min-w-[120px] md:min-w-[150px]"
              onChange={handleSortChange}
              value={sortBy}
            >
              <option value="default">Default</option>
              <option value="price-low-high">Price: Low to High</option>
              <option value="price-high-low">Price: High to Low</option>
            </select>
          </div>
          <div className="flex items-center">
            <span className="mr-2 text-black text-sm md:text-base">Show:</span>
            <select
              className="bg-white border rounded p-1 md:p-2 text-black text-sm md:text-base min-w-[60px] md:min-w-[80px]"
              onChange={handleItemsPerPageChange}
              value={itemsPerPage}
            >
              <option value={12}>12</option>
              <option value={24}>24</option>
              <option value={36}>36</option>
            </select>
          </div>
        </div>

        <div className="flex flex-wrap -mx-2 md:-mx-4">
          <div className="w-full md:w-3/4 px-2 md:px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
              {currentProducts.map((product) => (
                <Link
                  href={`/product/${product.slug}`}
                  key={product._id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="relative h-48">
                    <Image
                      src={getImageUrl(product.image) || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-3 md:p-4">
                    <h3 className="font-bold text-base md:text-lg mb-1 md:mb-2 text-black">{product.name}</h3>
                    <div className="flex justify-between items-center">
                      {product.originalPrice && product.originalPrice > product.price ? (
                        <>
                          <span className="text-gray-500 line-through text-sm md:text-base">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                          <span className="text-orange-500 font-bold text-sm md:text-base">
                            ${product.price.toFixed(2)}
                          </span>
                        </>
                      ) : (
                        <span className="text-orange-500 font-bold text-sm md:text-base">
                          ${product.price.toFixed(2)}
                        </span>
                      )}
                    </div>
                    {product.tags && (
                      <div className="mt-2">
                        {product.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    {product.available !== undefined && (
                      <span className={`text-xs ${product.available ? "text-green-500" : "text-red-500"}`}>
                        {product.available ? "In Stock" : "Out of Stock"}
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="w-full md:w-1/4 px-2 md:px-4 mt-8 md:mt-0">
            <div className="bg-gray-100 p-4 md:p-6 rounded-lg">
              <div className="relative flex items-center w-full max-w-lg border border-gray-300 rounded-md overflow-hidden mb-4">
                <input
                  type="text"
                  placeholder="Search Your Keyword.."
                  className="flex-grow px-3 md:px-4 py-2 md:py-3 bg-transparent text-gray-600 focus:outline-none text-sm md:text-base"
                  value={sidebarSearchQuery}
                  onChange={handleSearch}
                />
                <Search className="absolute right-4 top-3.1 text-gray-400" size={28} />
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-base md:text-lg mb-2 text-black">Category</h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category} className="flex items-center">
                      <input
                        type="checkbox"
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onChange={() => handleCategoryChange(category)}
                        className="mr-2"
                      />
                      <label htmlFor={category} className="text-sm">
                        {category}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <div className="text-white rounded-lg">
                  <Image src="/Banner (1).png" alt="Banner image" width={300} height={300} className="w-full" />
                </div>
              </div>

              <div className="mb-6">
                <PriceRangeFilter minPrice={0} maxPrice={8000} 
                onPriceChange={setPriceRange} />
              </div>

              <div className="mb-6">
                <h3 className="font-bold text-base md:text-lg mb-2 mt-6 md:mt-10 text-black">Latest Products</h3>
                {latestProducts.map((product, index) => (
                  <Link
                    href={`/Products/${product.slug}`}
                    key={index}
                    className="flex items-center mb-2 hover:bg-gray-200 rounded p-2 transition-colors duration-300"
                  >
                    <Image src="/latest.png" alt={product.name} width={40} height={40} className="mr-2" />
                    <div>
                      <h4 className="font-bold text-sm md:text-base text-black">{product.name}</h4>
                      <Image src="/stars.png" alt={product.name} width={40} height={40} className="mr-2" />
                      <p className="text-orange-500 text-sm md:text-base">${product.price.toFixed(2)}</p>
                    </div>
                  </Link>
                ))}
              </div>

              <div>
                <h3 className="font-bold text-base md:text-lg mb-2 text-black">Product Tags</h3>
                <div className="flex flex-wrap">
                  {productTags.map((tag, index) => (
                    <span
                      key={index}
                      className="text-gray-700 px-2 py-1 text-xs md:text-sm mr-2 mb-2 bg-gray-200 rounded hover:bg-gray-300 cursor-pointer transition-colors duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center items-center mx-auto bg-transparent gap-1 sm:gap-2 md:gap-4 mt-8">
          <button
            onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded bg-gray-100 text-orange-500"
          >
            <span className="text-xs sm:text-sm md:text-lg font-semibold">{"<<"}</span>
          </button>
          {Array.from({ length: Math.min(3, totalPages) }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded ${
                i + 1 === currentPage ? "bg-orange-500 text-white" : "bg-gray-100 text-orange-500"
              }`}
            >
              <span className="text-xs sm:text-sm md:text-lg font-semibold">{i + 1}</span>
            </button>
          ))}
          <button
            onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 flex items-center justify-center rounded bg-gray-100 text-orange-500"
          >
            <span className="text-xs sm:text-sm md:text-lg font-semibold">{">>"}</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  )
}




