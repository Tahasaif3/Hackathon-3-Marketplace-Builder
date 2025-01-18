import Image from 'next/image'
import { Utensils, Clock, GlassWater } from 'lucide-react'

const foodImages = [
  { src: '/ff1.png?height=356&width=362&text=Tacos', alt: 'Tacos', width: 362, height: 356 },
  { src: '/fc2.png?height=231&width=281&text=Burger', alt: 'Burger', width: 281, height: 231 },
  { src: '/fc5.png?height=306&width=244&text=FriedFood', alt: 'Fried Food', width: 244, height: 306 },
  { src: '/fc3.png?height=226&width=221&text=Burger2', alt: 'Another Burger', width: 221, height: 226 },
  { src: '/fc4.png?height=166&width=161&text=Salad', alt: 'Salad', width: 161, height: 166 }, 
  { src: '/fc6.png?height=166&width=161&text=Salad', alt: 'Salad', width: 161, height: 166 },

]

export default function WhyChooseUsSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-start gap-4">
        <div className="lg:w-1/2 grid grid-cols-6 grid-rows-6 gap-4">
            <div className="col-span-4 row-span-4"> <Image src={foodImages[0].src} alt={foodImages[0].alt} width={foodImages[0].width} height={foodImages[0].height} className="rounded-lg object-cover w-full h-full" />
            </div>
            <div className="col-span-2 row-span-3"> <Image src={foodImages[1].src} alt={foodImages[1].alt} width={foodImages[1].width} height={foodImages[1].height} className="rounded-lg object-cover w-full h-full" />
            </div>
            <div className="col-span-2 row-span-3"> <Image src={foodImages[2].src} alt={foodImages[2].alt} width={foodImages[2].width} height={foodImages[2].height} className="rounded-lg object-cover w-full h-full" />
            </div>
            <div className="col-span-2 row-span-3"> <Image src={foodImages[3].src} alt={foodImages[3].alt} width={foodImages[3].width} height={foodImages[3].height} className="rounded-lg object-cover w-full h-full" />
            </div> 
            <div className="col-span-2 row-span-4"> <Image src={foodImages[4].src} alt={foodImages[4].alt} width={foodImages[4].width} height={foodImages[4].height} className="rounded-lg object-cover w-[221px] h-[226px]" />
            </div>
            <div className="col-span-2 row-span-2"> <Image src={foodImages[5].src} alt={foodImages[4].alt} width={foodImages[5].width} height={foodImages[5].height} className="rounded-lg object-cover w-[166px] h-[166px]" />
            </div>
          </div>

          <div className="lg:w-1/2">
            <div className="flex justify-start items-start">
          <Image
            src={"/whyy.png"}
            width={174}
            height={40}
            alt='why choose us logo'
            className=''
          />
        </div>
            <h3 className="text-4xl font-bold mb-4"> <span className="text-orange-500">Extra</span> ordinary taste <br /> And Experienced </h3>
            <p className="text-gray-400 mb-8"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat. </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              {[{ icon: Utensils, label: 'Fast Food' }, { icon: Clock, label: 'Lunch' }, { icon: GlassWater, label: 'Dinner' },].map((item, index) => (<div key={index} className="bg-orange-500 rounded-lg p-4 w-[102px] h-[102px] text-center"> <item.icon className="w-8 h-8 mx-auto mb-2 text-white" />
                <span className="text-sm font-bold">{item.label}</span> </div>))} </div> <div className="bg-white text-black rounded-lg p-4 inline-flex items-center">
              <div> <Image src="/30.png" alt="30 years experience" width={300} height={100} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
