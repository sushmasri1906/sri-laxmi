"use client";

import Image from "next/image";

type Spare = { name: string; desc: string; img: string };

export default function CrusherSpares() {
	const jawSpares: Spare[] = [
		{
			name: "Toggle Sheating",
			desc: "Durable support for toggle assembly",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450804/16_cmc6hk.png",
		},
		{
			name: "Toggle Plate",
			desc: "Ensures secure toggle function",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450805/17_k2oefx.png",
		},
		{
			name: "Toggle Side Plate",
			desc: "Provides stability and reinforcement",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450805/18_iyadye.png",
		},

		{
			name: "Keeper Plate",
			desc: "Secure assembly & durability",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450757/11_kiumwx.png",
		},
		{
			name: "Z Plate",
			desc: "Structural stability & strength",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450761/12_bi9xwi.png",
		},
		{
			name: "Wedge Block",
			desc: "Accurate jaw alignment",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450760/13_zpbu6d.png",
		},
	];

	// Cone Crusher Spares
	const coneSpares: Spare[] = [
		{
			name: "Backing Compound",
			desc: "Provides strong crusher backing",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450785/21_spx2zv.png",
		},
		{
			name: "Grease Seals",
			desc: "Ensures sealing & prevents leakage",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450806/22_s5srrm.png",
		},
		{
			name: "Trust Pad Sets",
			desc: "Supports load distribution",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450807/23_pk3tvm.png",
		},
		{
			name: "Chunk Nut",
			desc: "Provides secure locking",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450807/24_vyth3y.png",
		},
		{
			name: "Concave and Mantle",
			desc: "Durable wear parts for crushers",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450809/25_d6bejb.png",
		},
		{
			name: "Dust Seal Ring",
			desc: "Protects components from dust",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450808/26_ej4il6.png",
		},
		{
			name: "Spider Cap",
			desc: "Provides structural strength",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450810/27_tlfjjm.png",
		},
		{
			name: "Spider Bush",
			desc: "Ensures smooth spider function",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450812/28_bljr80.png",
		},
		{
			name: "Core Shaft",
			desc: "Precision engineered shaft",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450812/29_ljun4r.png",
		},
		{
			name: "Cone Eccentric Bush",
			desc: "Maintains alignment & smooth run",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450812/30_czaht0.png",
		},
	];

	// VSI Crusher Spares
	const vsiSpares: Spare[] = [
		{
			name: "VSI Tips",
			desc: "High wear resistance tips",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450815/33_ssjiyp.png",
		},
		{
			name: "Cavity Wear Plates",
			desc: "Protects cavity walls from wear",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450816/34_bzu0cb.png",
		},
		{
			name: "Upper Wear Plates",
			desc: "Improves wear resistance",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450816/35_rcqzfv.png",
		},
		{
			name: "Mother Plate",
			desc: "Strong base support plate",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450818/36_le4wmm.png",
		},
		{
			name: "Feed Tube",
			desc: "Durable feed mechanism",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450818/37_d2xoby.png",
		},
		{
			name: "Lower Wear Plates",
			desc: "Wear resistant base plates",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450821/38_povixn.png",
		},
		{
			name: "Distribution Plate",
			desc: "Ensures material distribution",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450820/39_aydnc7.png",
		},
		{
			name: "Feed Eye Ring",
			desc: "Protects feed tube entry",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450821/40_nsex9a.png",
		},
		{
			name: "Top Plate",
			desc: "Provides structural top support",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450821/41_bevv4p.png",
		},
		{
			name: "VSI Rotor",
			desc: "Durable & balanced rotor",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450822/42_t4lzmr.png",
		},
	];

	// Screens Wire Mesh Spares
	const screenSpares: Spare[] = [
		{
			name: "Stainless Steel Woven Wire Mesh",
			desc: "Corrosion-resistant mesh",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450825/46_tzygtj.png",
		},
		{
			name: "Bolt and Nuts",
			desc: "Durable fastening solution",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450826/47_tffwss.png",
		},
		{
			name: "Black Vinyl Coated Welded Wire Mesh",
			desc: "Strong & coated mesh",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450828/48_ku8jji.png",
		},
		{
			name: "Steel Woven Wire Mesh",
			desc: "Tough woven steel mesh",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450829/49_jlrgtr.png",
		},
		{
			name: "Galvanized Welded Wire Mesh",
			desc: "Rust-proof galvanized mesh",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450830/50_ey5ixo.png",
		},
		{
			name: "Power Luming Machine",
			desc: "Efficient luming process",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450831/51_ulgzhg.png",
		},
		{
			name: "Stainless Steel Fasteners",
			desc: "Corrosion resistant fasteners",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450831/52_guqt24.png",
		},
		{
			name: "High Tensile Nut Bolt",
			desc: "Strong fastening bolts",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450832/54_fp7nhb.png",
		},
	];

	// Conveyor Spares
	const conveyorSpares: Spare[] = [
		{
			name: "Rollers",
			desc: "Durable rollers for belts",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450836/59_rkpzwn.png",
		},
		{
			name: "Impact Roller",
			desc: "Absorbs impact load",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450838/62_upedgh.png",
		},
		{
			name: "Conveyor Frames",
			desc: "Strong structural frames",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450844/67_jpztmg.png",
		},
		{
			name: "Drum Pulleys",
			desc: "Smooth conveyor motion",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450837/60_viuhdw.png",
		},
		{
			name: "Conveyor Belt",
			desc: "Reliable belt system",
			img: "https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450838/61_dzmedq.png",
		},
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
				<p className="inline-block rounded-full border mt-10 border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
					Crusher Spares
				</p>
				<h1 className="mt-2 text-3xl font-bold tracking-tight text-white">
					Precision-Engineered Spares
				</h1>
				<p className="mt-4 max-w-3xl mx-auto text-gray-300">
					Our spares are engineered for reliability and durability, ensuring
					your crushers perform at peak efficiency with reduced downtime.
				</p>
			</header>

			{/* Sections */}
			<SpareSection
				title="Jaw Crusher Spares"
				desc="Designed for maximum durability and accuracy, our jaw crusher spares help maintain alignment and ensure long-lasting operation."
				spares={jawSpares}
			/>
			<SpareSection
				title="Cone Crusher Spares"
				desc="Premium cone crusher components engineered for extended wear life, consistent gradation control, and reliable throughput."
				spares={coneSpares}
			/>
			<SpareSection
				title="VSI Crusher Spares"
				desc="Durable VSI parts for extended performance, reduced downtime, and consistent aggregate production."
				spares={vsiSpares}
			/>
			<SpareSection
				title="Screens Wire Mesh Spares"
				desc="High quality wire mesh solutions designed for precision screening and reliable performance."
				spares={screenSpares}
			/>
			<SpareSection
				title="Conveyor Spares"
				desc="Our company specializes in innovative conveyor belt solutions, optimizing efficiency across various industries."
				spares={conveyorSpares}
			/>
		</section>
	);
}

function SpareSection({
	title,
	desc,
	spares,
}: {
	title: string;
	desc: string;
	spares: Spare[];
}) {
	return (
		<section className="mb-16">
			<div className="mb-8">
				<h2 className="text-2xl font-semibold text-orange-500">{title}</h2>
				<p className="mt-2 max-w-3xl text-gray-300">{desc}</p>
			</div>
			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
				{spares.map((spare) => (
					<SpareCard key={spare.name} spare={spare} />
				))}
			</div>
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
			<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600" />
		</article>
	);
}
