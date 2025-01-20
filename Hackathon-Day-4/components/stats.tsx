import Image from 'next/image'

export default function StatisticsSection() {
  return (
    <section className="relative py-6 mt-0">
      <Image
        src="/stats.png?height=468&width=1700&text=Background+Image"
        alt="Background"
        width={1700}
       height={100}
        className="absolute inset-0 w-full h-full brightness-50"
      />
      <div className="relative z-10 container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <Image
            src="/st.png"
            alt="Icon"
            width={1319}
            height={247}
            className="w-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}
