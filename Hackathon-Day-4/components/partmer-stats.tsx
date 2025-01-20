import Image from 'next/image'
import { ChefHat, Utensils, Clock, Users } from 'lucide-react'

const stats = [
  { icon: ChefHat, label: 'Professional Chefs', value: '420' },
  { icon: Utensils, label: 'Items Of Food', value: '320' },
  { icon: Clock, label: 'Years Of Experienced', value: '30+' },
  { icon: Users, label: 'Happy Customers', value: '220' },
]

export default function PartnerStats() {
  return (
<section className="relative py-16 mb-10 mt-10 w-full">
      <Image
        src="/partner.png?height=468&width=1923&text=Background+Image"
        alt="Background"
        layout="fill"
        objectFit="cover"
        className="filter brightness-50 contrast-125"       />
        
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          {stats.map((stat, index) => (
            <div key={index} className="text-center mb-8 sm:mb-0 w-1/2 sm:w-auto">
              <stat.icon className="w-12 h-12 mx-auto mb-2 text-orange-500" />
              <h3 className="text-3xl font-bold text-white mb-1">{stat.value}</h3>
              <p className="text-sm text-gray-300">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

