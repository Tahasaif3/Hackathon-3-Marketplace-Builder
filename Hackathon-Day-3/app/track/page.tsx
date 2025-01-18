'use client'; // Required for Client Component behavior

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Footer from '@/components/footer';
import { AiOutlineMenu } from 'react-icons/ai';
import { Search } from 'lucide-react';
import { FaShoppingBag, FaUser } from 'react-icons/fa';

const fakeOrderStatuses = [
  'Order Placed',
  'Processing',
  'Preparing',
  'Out for Delivery',
  'Delivered'
];

function TrackOrderPageContent() {
  const searchParams = useSearchParams();
  const trackingNumber = searchParams.get('number');
  const [orderStatus, setOrderStatus] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const fetchOrderStatus = () => {
      const randomStatus = fakeOrderStatuses[Math.floor(Math.random() * fakeOrderStatuses.length)];
      setOrderStatus(randomStatus);
    };

    if (trackingNumber) {
      fetchOrderStatus();
    }
  }, [trackingNumber]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black py-2">
        <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
          <div className="text-white font-bold text-2xl">
            <span className="text-orange-500 font-bold text-2xl">Food</span>luck
          </div>
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <AiOutlineMenu />
          </button>
          <ul
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}
          >
            <li>
              <Link href="/" className="hover:text-orange-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/menu" className="hover:text-orange-500">
                Menu
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-orange-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-orange-500">
                Contact
              </Link>
            </li>
          </ul>
          <div className="w-full md:w-auto flex items-center justify-between md:justify-end space-x-4 mt-4 md:mt-0">
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
            <Link href="/profile">
              <button className="bg-gray-800 p-2 rounded-full">
                <FaUser />
              </button>
            </Link>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <div className="relative h-48 md:h-64 bg-gray-800">
        <Image
          src="/heroo.png"
          alt="Track Order Hero"
          layout="fill"
          objectFit="cover"
          className="opacity-70"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Track Your Order</h1>
          <p className="text-sm md:text-base text-white mt-2">
            Home &gt; <span className="text-orange-400">Track Order</span>
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8 flex-grow">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white shadow-md rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Order Status</h2>
            {trackingNumber ? (
              <>
                <p className="mb-4">
                  Tracking Number: <span className="font-mono">{trackingNumber}</span>
                </p>
                <p className="text-lg font-semibold">
                  Current Status: <span className="text-orange-500">{orderStatus}</span>
                </p>
              </>
            ) : (
              <p className="text-red-500">No tracking number provided.</p>
            )}
          </div>
          <div className="mt-6 text-center">
            <Link
              href="/"
              className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default function TrackOrderPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <TrackOrderPageContent />
    </Suspense>
  );
}


// 'use client'

// import { useState, useEffect } from 'react'
// import { useSearchParams } from 'next/navigation'
// import Link from 'next/link'
// import Image from 'next/image'
// import Footer from '@/components/footer'
// import { AiOutlineMenu } from 'react-icons/ai'
// import { Search } from 'lucide-react'
// import { FaShoppingBag, FaUser } from 'react-icons/fa'
// import { MdShoppingCartCheckout } from 'react-icons/md'

// const fakeOrderStatuses = [
//   'Order Placed',
//   'Processing',
//   'Preparing',
//   'Out for Delivery',
//   'Delivered'
// ]

// export default function TrackOrderPage() {
//   const searchParams = useSearchParams()
//   const trackingNumber = searchParams.get('number')
//   const [orderStatus, setOrderStatus] = useState('')
//   const [isMenuOpen, setIsMenuOpen] = useState(false)

//   const toggleMenu = () => {
//     setIsMenuOpen((prev) => !prev)
//   }

//   useEffect(() => {
//     const fetchOrderStatus = () => {
//       const randomStatus = fakeOrderStatuses[Math.floor(Math.random() * fakeOrderStatuses.length)]
//       setOrderStatus(randomStatus)
//     }

//     if (trackingNumber) {
//       fetchOrderStatus()
//     }
//   }, [trackingNumber])

//   return (
//     <div className="min-h-screen">
//       <header className="bg-black py-2">
//       <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
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
//           src="/heroo.png"
//           alt="Track Order Hero"
//           layout="fill"
//           objectFit="cover"
//         />
//         <div className="absolute inset-0 flex flex-col items-center justify-center">
//           <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Track Your Order</h1>
//           <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; Track Order</span></p>
//         </div>
//       </div>

//       <div className="container mx-auto px-4 py-8">
//         <div className="max-w-2xl mx-auto">
//           <div className="bg-white shadow-md rounded-lg p-6">
//             <h2 className="text-2xl font-bold mb-4">Order Status</h2>
//             {trackingNumber ? (
//               <>
//                 <p className="mb-4">Tracking Number: <span className="font-mono">{trackingNumber}</span></p>
//                 <p className="text-lg font-semibold">Current Status: <span className="text-orange-500">{orderStatus}</span></p>
//               </>
//             ) : (
//               <p className="text-red-500">No tracking number provided.</p>
//             )}
//           </div>
//           <div className="mt-6 text-center">
//             <Link
//               href="/"
//               className="px-6 py-2 bg-orange-500 text-white rounded-md shadow-sm text-sm font-medium hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
//             >
//               Return to Home
//             </Link>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   )
// }
