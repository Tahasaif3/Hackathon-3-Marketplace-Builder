import Image from 'next/image'

const blogPosts = [
    { title: 'Fresh and Healthy', image: '/blog1.png' },
    { title: 'Delicious Pizza', image: '/blog2.png' },
    { title: 'Vegetarian Delight', image: '/blog3.png' },
]

export default function BlogPreviewSection() {
    return (
        <section className="bg-black text-white py-12 sm:py-16 min-h-screen">
            <div className="container mx-auto px-4 max-w-6xl">
                <div className="flex flex-col items-center mb-8 sm:mb-12">
                    <Image src="/hesd.png" width={123} height={40} alt='blogs logo' className='mb-4' />
                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
                        <span className='text-orange-500'>La</span>test News & Blog
                    </h3>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {blogPosts.map((post, index) => (
                        <div key={index} className="bg-black border-2 border-white rounded-lg overflow-hidden">
                            <div className="relative h-48 sm:h-56 md:h-64">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div className="p-4">
                                <h4 className="font-bold text-lg sm:text-xl mb-2">{post.title}</h4>
                                <p className="text-gray-400 text-sm sm:text-base mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                                </p>
                                <div className="flex justify-between items-center">
                                    <a href="#" className="text-orange-500 font-bold text-sm sm:text-base">
                                        Learn More
                                    </a>
                                    <Image src="/iccons.png" alt="icons image" width={60} height={50} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

