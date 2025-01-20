'use client'

import { useState } from 'react'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Footer from '@/components/footer'
import { ChefHat, Coffee, Play, Search, Star, Wind } from 'lucide-react'
import { FaShoppingBag, FaUser } from 'react-icons/fa'
import { MdShoppingCartCheckout } from 'react-icons/md'
import { AiOutlineMenu } from 'react-icons/ai'

export default function About() {
    const teamMembers = [
        {
            name: "Mark Henry",
            role: "Owner",
            image: "/teams.png",
        },
        {
            name: "Lucky Helen",
            role: "Chef",
            image: "/teams.png",
        },
        {
            name: "Moon Henry",
            role: "Founder",
            image: "/teams.png",
        },
        {
            name: "Tom Monrow",
            role: "Specialist",
            image: "/teams.png",
        },
    ];


    const menuItems = [
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        },
        {
            name: "Alder Grilled Chinook Salmon",
            price: "32.5",
            description: "Toasted Pine Nut topped with creamy, herbs"
        }
    ]
    const testimonials = [
        {
            name: 'Alamin Hasan',
            role: 'Food Specialist',
            image: '/t.png',
            quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.',
            rating: 4,
        },
    ]

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <div className='bg-white min-h-screen'>
            <header className="bg-black py-2">
                <nav className="container mx-auto px-4 flex flex-wrap justify-between items-center">
                    <div className="text-white font-bold text-2xl">
                        <span className="text-orange-500 font-bold text-2xl">Food</span>luck
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={toggleMenu}
                    >
                        <AiOutlineMenu />
                    </button>
                    <ul
                        className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-6 text-white justify-center items-center w-full md:w-auto`}><br />
                        <li><Link href="/" className="hover:text-orange-500">Home</Link></li>
                        <li><Link href="/Menu" className="hover:text-orange-500">Menu</Link></li>
                        <li><Link href="/Blog" className="hover:text-orange-500">Blog</Link></li>
                        <li><Link href="/Pages" className="hover:text-orange-500">Pages</Link></li>
                        <li><Link href="/About" className="hover:text-orange-500">About</Link></li>
                        <li><Link href="/Shop" className="hover:text-orange-500">Shop</Link></li>
                        <li><Link href="/Chef" className="hover:text-orange-500">Chef</Link></li>
                        <li><Link href="/contact" className="hover:text-orange-500">Contact</Link></li>
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
                        <Link href={"/ShoppingCart"}>
                            <button className="bg-gray-800 p-2 rounded-full">
                                <FaShoppingBag />
                            </button>
                        </Link>
                        <Link href={"/Signup"}>
                            <button className="bg-gray-800 p-2 rounded-full">
                                <FaUser />
                            </button>
                        </Link>
                        <Link href={"/Checkout"}>
                            <button className="bg-gray-800 p-2 rounded-full">
                                <MdShoppingCartCheckout />
                            </button>
                        </Link>
                    </div>
                </nav>
            </header>

            {/* Hero Section */}
            <div className="relative h-48 md:h-64 bg-gray-800">
                <Image
                    src="/heroo.png?height=256&width=1920&text=Menu+Hero+Image"
                    alt="Menu Hero"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <h1 className="text-3xl md:text-4xl font-bold text-white text-center">About us</h1>
                    <p className='text-sm md:text-base text-white mt-2'>Home &gt; <span className="text-orange-400"> &nbsp; About</span></p>
                </div>
            </div>

            <div className="bg-pink-50/80">
                <div className="container mx-auto px-4 py-16">
                    <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                        {/* Food Images Grid */}
                        <div className="flex justify-center md:justify-start">
                            <Image
                                src="/abbout.png?height=300&width=300"
                                alt="About Image"
                                width={650}
                                height={50}
                                className="rounded-lg w-full object-cover"
                            />
                        </div>

                        {/* Content Section */}
                        <div className="space-y-6 w-full lg:w-[520px]">
                            <Image src={"/Aboutus.png"} width={112} height={26} alt='about logo' className='mb-1' />
                            <h2 className="text-3xl font-bold leading-tight">
                                Food is an important part Of a balanced Diet
                            </h2>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque hendrerit
                                libero sit volutpat tempus imperdiet. Ut ultricies tortor ac ligula pulvinar, vitae
                                maximus nisi interdum.
                            </p>
                            <div className="flex flex-wrap gap-4">
                                <button className="px-6 py-3 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">
                                    Order Now
                                </button>
                                <button className="flex items-center px-6 py-3 border  text-orange-500 rounded-md hover:bg-orange-50 transition-colors">
                                    <Play className="mr-2" />
                                    Watch Video
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-center leading-tight">
                            Why Choose us
                        </h2>
                        <p className="text-gray-600 text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum.
                        </p>

                        <Image
                            src="/why.png?height=468&width=192&text=Background+Image"
                            alt="Background"
                            width={1920}
                            height={460}
                            className="filter brightness-50 contrast-125" />
                    </div>

                    {/* Features Grid */}
                    <div className="grid md:grid-cols-3 gap-8 mt-20">
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <ChefHat className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold">Best Chef</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque hendrerit.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Coffee className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold">120 Item food</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque hendrerit.
                            </p>
                        </div>
                        <div className="text-center space-y-3">
                            <div className="flex justify-center">
                                <Wind className="w-8 h-8 text-orange-500" />
                            </div>
                            <h3 className="text-xl font-semibold">Clean Environment</h3>
                            <p className="text-gray-600">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur pellentesque hendrerit.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Member Section */}
            <section className="bg-orange-400 py-8">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold text-center mb-2 text-white">Team Member</h2>
                    <p className='text-sm font-normal text-white text-center w-full lg:w-[418px] mx-auto mb-12'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="text-center bg-white rounded-lg shadow-lg overflow-auto">
                                <div className="relative w-full aspect-square mb-2">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold text-orange-600">{member.name}</h3>
                                    <p className="text-gray-500">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            {/* Testimonials section */}
            <section className="text-black py-16 md:py-20">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-start mb-12 md:mb-8">
                        <Image src='/Testimonials.png' alt="Testimonials heading" width={123} height={40} className='mb-3 mr-96' />
                        <h3 className="text-2xl md:text-4xl font-bold mt-4 text-black">What our client are saying</h3>
                    </div>

                    <div className="relative max-w-xl mx-auto mt-16 md:mt-8">
                        <div className="bg-white text-black mt-10 p-6 md:p-8 rounded-lg shadow-lg pt-20 relative">
                            <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                                <div className="w-24 h-24 rounded-full bg-black p-1">
                                    <Image
                                        src={testimonials[0].image}
                                        alt={testimonials[0].name}
                                        width={96}
                                        height={96}
                                        className="rounded-full"
                                    />
                                </div>
                            </div>
                            <div className="text-orange-500 text-4xl font-serif text-center mb-4"></div>
                            <blockquote className="text-center text-sm md:text-base mb-4">
                                {testimonials[0].quote}
                            </blockquote>
                            <div className="flex justify-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 md:w-5 md:h-5 ${i < testimonials[0].rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                    />
                                ))}
                            </div>
                            <p className="text-center font-bold">{testimonials[0].name}</p>
                            <p className="text-center text-gray-600 text-sm">{testimonials[0].role}</p>
                        </div>
                        <div className="flex justify-center mt-4">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`w-2 h-2 rounded-full mx-1 ${i === 0 ? 'bg-orange-500' : 'bg-gray-400'}`}
                                ></div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Menu Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Our Food Menu</h2>
                    <div className="relative mb-8 px-4 sm:px-0">
                        <div
                            className="flex overflow-x-auto scrollbar-hide gap-4 pb-4 sm:pb-0 sm:flex-wrap sm:justify-center"
                        >
                            {["Breakfast", "Lunch", "Dinner", "Dessert", "Drink", "Snack"].map((item) => (
                                <button
                                    key={item}
                                    className="flex-none px-4 py-2 text-sm sm:text-base whitespace-nowrap text-gray-600 hover:text-orange-500 focus:text-orange-500 transition-colors duration-200 ease-in-out"
                                >
                                    {item}
                                </button>
                            ))}
                        </div>
                        <div className="absolute left-0 top-0 bottom-0 w-4 bg-gradient-to-r from-white to-transparent sm:hidden"></div>
                        <div className="absolute right-0 top-0 bottom-0 w-4 bg-gradient-to-l from-white to-transparent sm:hidden"></div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                        {menuItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold">{item.name}</h3>
                                    <p className="text-sm text-gray-500">{item.description}</p>
                                </div>
                                <span className="text-orange-500">${item.price}</span>
                            </div>
                        ))}
                    </div>
                    <button className='bg-white ml-auto flex justify-center items-center rounded-lg border-2 border-orange-400 w-[143px] h-[52px] text-orange-400 mx-auto mt-10'>
                        View menu
                    </button>
                </div>
            </section>

            <Footer />
        </div>
    )
}
