import Image from 'next/image'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Alamin Hasan',
    role: 'Food Specialist',
    image: '/t.png',
    quote: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.',
    rating: 4,
  },
]

export default function TestimonialSection() {
  return (
    <section className="bg-black text-white py-16 md:py-20">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-start mb-12 md:mb-8">
          <Image src='/Testimonials.png' alt="Testimonials heading" width={123} height={40} className='mb-3 mr-96' />
          <h3 className="text-2xl md:text-4xl font-bold mt-4 text-white">What our client are saying</h3>
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
  )
}

