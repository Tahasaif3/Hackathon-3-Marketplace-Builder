import Image from 'next/image';

export default function StatisticsSection() {
  return (
    <section className="relative py-16 px-4 md:px-32">
      <h3 className="text-gray-600 text-xl md:text-2xl text-center">Partners & Clients</h3>
      <h2 className="text-black text-3xl md:text-4xl font-bold mb-10 text-center">
        We work with the best people
      </h2>

      <div className="relative w-full flex justify-center">
        <Image
          src="/Logo (1).png?height=468&width=1923&text=Background+Image"
          alt="Background"
          width={1923}
          height={468}
          className="w-full max-w-screen-md object-cover filter brightness-50 contrast-125"
        />
      </div>
    </section>
  );
}
