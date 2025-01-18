import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Twitter, Instagram, Youtube, Linkedin } from 'lucide-react'

const recentPosts = [
  { date: '20 Feb 2022', title: 'Keep Your Business', image: "/recent.png" },
  { date: '20 Feb 2022', title: 'Keep Your Business', image: "/recents2.png" },
  { date: '20 Feb 2022', title: 'Keep Your Business', image: "/recents.png" },
]

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl font-bold">
              <span className="text-orange-500">St</span>ill You Need Our Support?
            </h2>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="bg-[#FF9F0D] text-white w-full sm:w-[350px] h-[56px] py-[5px] px-[10px] md:py-[10px] md:px-[20px] rounded-md"
              />
              <button className="text-[#FF9F0D] bg-white w-full sm:w-[163px] h-[56px] py-[5px] md:py-[10px] px-[10px] md:px-[20px] rounded-md">
                Subscribe Now
              </button>
            </div>
          </div>

          <p className="text-gray-400 mt-4">
            Don&apos;t wait, make a smart & logical quote here. It&apos;s pretty easy.
          </p>
          <hr className="border-t-2 border-orange-500 mb-10 mt-10" />

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-xl font-bold mb-4">About Us.</h3>
            <p className="text-gray-400 mb-4">
              Corporate clients and leisure travelers has been relying on Groundlink for dependable
              safe, and professional chauffeured car service in major cities across World.
            </p>
            <div className="flex items-center p-4 rounded-md">
              <div className="p-2 mr-3">
                <Image src="/Watch.png" alt="Clock" width={78} height={72} />
              </div>
              <div>
                <p className="font-bold">Opening Houres</p>
                <p className="text-gray-400">Mon - Sat(8:00 - 6:00)</p>
                <p className="text-gray-400">Sunday - Closed</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {['About', 'News', 'Partners', 'Team', 'Menu', 'Contacts'].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-gray-400 hover:text-white transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Help?</h3>
            <ul className="space-y-2">
              {['FAQ', 'Term & conditions', 'Reporting', 'Documentation', 'Support Policy', 'Privacy'].map((item) => (
                <li key={item}>
                  <Link href="/FAQ" className="text-gray-400 hover:text-white transition duration-300">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Recent Post</h3>
            <ul className="space-y-4">
              {recentPosts.map((post, index) => (
                <li key={index} className="flex items-center">
                  <Image src={post.image} alt="Post thumbnail" width={50} height={50} className="rounded mr-3" />
                  <div>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                    <Link href="#" className="hover:text-orange-500 transition duration-300">
                      {post.title}
                    </Link>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-[#FF9F0D] flex flex-col sm:flex-row justify-between items-center w-full px-4 sm:px-0 h-auto sm:h-[100px]">
  {/* Footer Text */}
  <p className="text-white text-[15px] text-center sm:text-left sm:ml-24">
    Copyright © 2023 by Taha Saif. All Rights Reserved.
  </p>

  {/* Social Media Icons */}
  <div className="flex space-x-4 mt-4 sm:mt-0 sm:mr-40">
    {[Facebook, Twitter, Instagram, Youtube, Linkedin].map((Icon, index) => (
      <Link
        key={index}
        href="#"
        className="flex items-center justify-center text-gray-400 bg-white w-8 h-8 hover:text-white transition duration-300"
      >
        <Icon size={20} />
      </Link>
    ))}
  </div>
</div>


  {/* Footer Image */}
  <Image
    src="/tree.png"
    alt="Decorative plant"
    width={200}
    height={200}
    className="absolute bottom-0 right-0 opacity-30 hidden sm:hidden md:block"
  />

  </div>
</footer>
  )
}


