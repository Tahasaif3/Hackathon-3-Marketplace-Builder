import Image from 'next/image'

const menuItems = [
  { name: 'Lettuce Leaf', price: '12.5', image: '/m1.png?height=80&width=80&text=Lettuce' },
  { name: 'Fresh Breakfast', price: '16.5', image: '/m2.png?height=80&width=80&text=Breakfast' },
  { name: 'Mild Butter', price: '12.5', image: '/m3.png?height=80&width=80&text=Butter' },
  { name: 'Fresh Bread', price: '10.5', image: '/m4.png?height=80&width=80&text=Bread' },
  { name: 'Chesse Butter', price: '12.5', image: '/m5.png?height=80&width=80&text=Cheese' },
  { name: 'Italian Pizza', price: '15.5', image: '/m6.png?height=80&width=80&text=Pizza' },
  { name: 'Veg Burger', price: '12.5', image: '/m7.png?height=80&width=80&text=Burger' },
  { name: 'Sliced Beef', price: '12.5', image: '/m8.png?height=80&width=80&text=Beef' },
]

const chefs = [
  { name: 'D. Estwood', role: 'Head Chef', image: '/chef1.png?height=391&width=312&text=Chef+1' },
  { name: 'D. Scoriesh', role: 'Assistant Chef', image: '/chef2.png?height=200&width=150&text=Chef+2' },
  { name: 'M. William', role: 'Advertising Chef', image: '/chef3.png?height=200&width=150&text=Chef+3' },
  { name: 'W. Readfroad', role: 'Chef', image: '/chef4.png?height=200&width=150&text=Chef+4' },
]

export default function MenuSection() {
  return (
    <section className="bg-black text-white py-16">
      <div className="container px-4 ">
        <div className="flex justify-center items-center">
          <Image
            src={"/choose.png"}
            width={169}
            height={40}
            alt='blogs logo'
            className=''
          />
        </div>
        <h3 className="text-4xl font-bold mb-8 flex justify-center items-center ml-8">From Our Menu</h3>

        <div className="flex justify-center items-center mb-10 sm:mb-4">
          <Image
            src={"/navbar.png"}
            alt="navbar"
            width={1056}
            height={28}
            className="w-full "
          />
        </div>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative w-full max-w-[600px] aspect-square bg-black overflow-hidden">
            <div className="absolute -top-[10%] -left-[10%] w-[120%] h-[120%] z-10">
              <Image
                src="/main1.png"
                alt="Herb border"
                layout="fill"
                objectFit="contain"
              />
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 z-20">
              <Image
                src="/main2.png"
                alt="Salad plate"
                width={400}
                height={400}
                className="rounded-full"
              />
            </div>
          </div>


          <div className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {menuItems.map((item, index) => (
              <div key={index} className="flex items-center bg-black rounded-lg p-4">
                <Image src={item.image} alt={item.name} width={80} height={80} className="rounded-lg mr-4" />
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-gray-400 text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
                  <p className="text-orange-500 font-bold mt-2">${item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chef Section */}
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <Image
              src={"/Chefs.png"}
              width={59}
              height={40}
              alt='blogs logo'
              className='mt-6'
            />
          </div>       
           <h3 className="text-4xl font-bold mb-8 flex justify-center items-center"><span className='text-orange-500'>Me</span>et Our Chef</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {chefs.map((chef, index) => (
              <div key={index} className="text-center">
                <Image src={chef.image} alt={chef.name} width={312} height={391} className="rounded-lg mx-auto mb-4" />
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <button className="border-2 border-red-500 text-white font-bold py-3 px-8 rounded-full hover:bg-orange-600 transition duration-300">
              See More
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
