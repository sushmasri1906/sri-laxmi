"use client";

import Image from "next/image";

type Spare = { name: string; desc: string; img: string };

export default function CrusherSpares() {
  const jawSpares: Spare[] = [
    { name: "Keeper Plate", desc: "Secure assembly & durability", img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450757/11_kiumwx.png" },
    { name: "Z Plate", desc: "Structural stability & strength", img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450761/12_bi9xwi.png" },
    { name: "Wedge Block", desc: "Accurate jaw alignment", img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450760/13_zpbu6d.png" },
    { name: "Tie Rods", desc: "Reliable reinforcement", img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450763/14_fhvhtz.png" },
  ];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-16 bg-black text-white">
      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background: `
            radial-gradient(800px 500px at 20% 0%, rgba(255,125,40,0.15), transparent 70%),
            radial-gradient(800px 500px at 80% 100%, rgba(255,125,40,0.15), transparent 70%)
          `,
          filter: "blur(60px)",
        }}
      />

      {/* Page header */}
      <header className="mb-12 text-center">
        <p className="inline-block rounded-full border mt-10  border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
          Crusher Spares
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
          Precision-Engineered Spares
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-gray-300">
          Our spares are engineered for reliability and durability, ensuring your
          crushers perform at peak efficiency with reduced downtime.
        </p>
      </header>

      {/* Jaw Crusher Spares */}
      <section className="mb-16">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-orange-500">
            Jaw Crusher Spares
          </h2>
          <p className="mt-2 max-w-3xl text-gray-300">
            Designed for maximum durability and accuracy, our jaw crusher spares
            help maintain alignment and ensure long-lasting operation.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {jawSpares.map((spare) => (
            <SpareCard key={spare.name} spare={spare} />
          ))}
        </div>
      </section>

      {/* Cone Crusher Spares */}
      <section>
        <h2 className="text-2xl font-semibold text-orange-500">
          Cone Crusher Spares
        </h2>
        <p className="mt-2 max-w-3xl text-gray-300">
          Premium cone crusher components engineered for extended wear life,
          consistent gradation control, and reliable throughput. Keep your
          operations running with the right parts delivered on time.
        </p>

        
      </section>
    </section>
  );
}

function SpareCard({ spare }: { spare: Spare }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-gray-800 bg-[#0b0b0b] shadow-md transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[4/3] w-full">
        <Image
          src={spare.img}
          alt={spare.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-contain p-4 transition group-hover:scale-[1.05]"
        />
      </div>

      <div className="flex flex-1 flex-col gap-1 p-4">
        <h3 className="text-lg font-semibold text-white">{spare.name}</h3>
        <p className="text-sm text-gray-400">{spare.desc}</p>
      </div>

      {/* Orange highlight bar */}
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600" />
    </article>
  );
}
