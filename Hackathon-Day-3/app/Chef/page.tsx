import { client } from '@/lib/sanity'
import ChefPageClient from './chef-page-client'

async function getChefs() {
  return client.fetch(`*[_type == "chef"]{
    _id,
    name,
    position,
    image,
    experience,
    specialty,
    description,
    available
  }`)
}

export default async function ChefPage() {
  const chefs = await getChefs()

  return <ChefPageClient chefs={chefs} />
}



// "use client"

// import { useState } from 'react'
// import React from 'react'
// import Image from 'next/image'
// import Link from 'next/link'
// import Footer from '@/components/footer'
// import { Search } from 'lucide-react'
// import { FaShoppingBag, FaUser } from 'react-icons/fa'
// import { MdShoppingCartCheckout } from 'react-icons/md'
// import { AiOutlineMenu } from 'react-icons/ai'

// export default function Page() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev);
//   };

//   const chefs = [
//     {
//       name: "Tahmina Rumi",
//       role: "Chef",
//       image: "/r1.png?height=400&width=300"
//     },
//     {
//       name: "Jorina Begum",
//       role: "Chef",
//       image: "/r2.png?height=400&width=300"
//     },
//     {
//       name: "M Mohammad",
//       role: "Chef",
//       image: "/r3.png?height=400&width=300"
//     },
//     {
//       name: "Martin Kathy",
//       role: "Chef",
//       image: "/r4.png?height=400&width=300"
//     },
//     {
//       name: "Tahmina Rumi",
//       role: "Chef",
//       image: "/r5.png?height=400&width=300"
//     },
//     {
//       name: "Bisnu Bengol",
//       role: "Chef",
//       image: "/r6.png?height=400&width=300"
//     },
//     {
//       name: "Motin Mollahd",
//       role: "Chef",
//       image: "/r7.png?height=400&width=300"
//     },
//     {
//       name: "William Rumi",
//       role: "Chef",
//       image: "/r8.png?height=400&width=300"
//     },
//     {
//       name: "Kate william roy",
//       role: "Chef",
//       image: "/r9.png?height=400&width=300"
//     },
//     {
//       name: "Mahmud kholi",
//       role: "Chef",
//       image: "/r10.png?height=400&width=300"
//     },
//     {
//       name: "Altair Rahman",
//       role: "Chef",
//       image: "/r11.png?height=400&width=300"
//     },
//     {
//       name: "Mostaba holly",
//       role: "Chef",
//       image: "/r12.png?height=400&width=300"
//     },
//   ]

//   return (
//     <div className='bg-white min-h-screen'>
//      <header className="bg-black py-2">
//         <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
//           <div className="text-white font-bold text-2xl"><span className="text-orange-500 font-bold text-2xl">Food</span>luck</div>

//           <button
//             className="md:hidden text-white"
//             onClick={toggleMenu}
//           >
//             <AiOutlineMenu />
//           </button>
//           <ul
//             className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}><br/>       
//              <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
//             <li><Link href="/Menu" className="hover:text-orange-500">Menu</Link></li>
//             <li><Link href="/Blog" className="hover:text-orange-500">Blog</Link></li>
//             <li><Link href="/Pages" className="hover:text-orange-500">Pages</Link></li>
//             <li><Link href="/About" className="hover:text-orange-500">About</Link></li>
//             <li><Link href="/Shop" className="hover:text-orange-500">Shop</Link></li>
//             <li><Link href="/Chef" className="hover:text-orange-500">Chef</Link></li>
//             <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
//           </ul>
//           <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-4 mt-4 md:mt-0">
//             <div className="relative flex-grow md:flex-grow-0">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full md:w-auto bg-gray-800 rounded-full py-2 px-4 pr-10 focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm"
//               />
//               <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
//             </div>
//             <Link href={"/ShoppingCart"}> <button className="bg-gray-800 p-2 rounded-full">
//               <FaShoppingBag />
//             </button></Link>
//             <Link href={"/Signup"}> <button className="bg-gray-800 p-2 rounded-full">
//               <FaUser />
//             </button></Link>
//             <Link href={"/Checkout"}> <button className="bg-gray-800 p-2 rounded-full">
//               <MdShoppingCartCheckout />
//             </button></Link>
//           </div>
//         </nav>
//       </header>

//       {/* Hero Section */}
//       <div className="relative h-48 md:h-64 bg-gray-800">
//         <Image
//           src="/heroo.png?height=256&width=1920&text=Menu+Hero+Image"
//           alt="Menu Hero"
//           layout="fill"
//           objectFit="cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Chef</h1>
//           <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Chef</span></p>
//         </div>
//       </div>

//       {/* card grid */}
//       <div className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {chefs.map((chef, index) => (
//             <div key={index} className="group">
//               <div className="relative aspect-[3/4] overflow-hidden rounded-lg mb-4">
//                 <Image
//                   src={chef.image}
//                   alt={chef.name}
//                   fill
//                   className="object-cover transition-transform duration-300 group-hover:scale-110"
//                 />
//               </div>
//               <div className="text-center">
//                 <h3 className="text-xl font-semibold text-gray-900">{chef.name}</h3>
//                 <p className="text-gray-600">{chef.role}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//       {/*footer*/}
//       <Footer />
//     </div>
//   )
// }

