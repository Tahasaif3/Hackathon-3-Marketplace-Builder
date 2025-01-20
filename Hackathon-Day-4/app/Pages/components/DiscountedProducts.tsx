"use client";

import { useState, useEffect } from "react";
import { Product } from "../types";
import Image from "next/image";
import { client, urlFor } from "@/lib/sanity";

export default function DiscountedProducts() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchProducts() {
            const data: Product[] = await client.fetch(`
                *[_type == "product"] {
                    _id,
                    name,
                    image,
                    originalPrice,
                    discountedPrice
                }
            `);
            setProducts(data);
            setLoading(false);
        }
        fetchProducts();
    }, []);

    if (loading) {
        return <p>Loading products...</p>;
    }

    const getImageUrl = (image: any) => {
        if (!image) return null;
        try {
            return urlFor(image).width(400).height(300).url();
        } catch (error) {
            console.error("Error generating image URL:", error);
            return null;
        }
    };

    return (
        <div className="mb-16 max-w-6xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 border-b pb-3">
                Discounted Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {products.map((product) => (
                    <div
                        key={product._id}
                        className="group relative bg-white border border-gray-200 rounded-lg p-4 shadow-md hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="relative w-full h-52 overflow-hidden rounded-md">
                            <Image
                                src={getImageUrl(product.image) || "/placeholder.svg"}
                                alt={product.name}
                                layout="fill"
                                objectFit="cover"
                                className="group-hover:scale-105 transition-transform duration-300"
                            />
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                            <p className="text-gray-500 line-through">
                                ${product.originalPrice.toFixed(2)}
                            </p>
                            <p className="text-xl text-red-500 font-bold">
                                ${product.discountedPrice.toFixed(2)}
                            </p>
                            <p className="text-sm text-gray-600">
                                Save{" "}
                                {(
                                    (1 - product.discountedPrice / product.originalPrice) *
                                    100
                                ).toFixed(2)}
                                %
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 rounded-lg">
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600 transition"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
