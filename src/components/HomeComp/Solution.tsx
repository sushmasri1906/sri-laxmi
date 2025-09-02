"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const solutions = [
	{
		title: "VERTICAL LATHE MACHINE",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729846/vertical-turning-lathe-machine-1000x1000_bsyjet.jpg",
		description:
			"High-performance vertical lathe engineered for precise turning of heavy, large-diameter workpieces. Ideal where accuracy in vertical machining of metals and alloys is critical.",
	},
	{
		title: "LATHE MACHINE",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729922/precision_qgvgsr.jpg",
		description:
			"Versatile, precision-focused lathe for shaping, cutting, and drilling. Suited for metalworking shops, tool rooms, and industrial manufacturing lines.",
	},
];

export default function Solution() {
	const prefersReducedMotion = useReducedMotion();

	const fadeUp = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 30 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" },
		}),
	};

	return (
		<section className="relative py-20 px-6 sm:px-10 lg:px-24 bg-[#0b0b0b] text-white overflow-hidden">
			{/* Ambient glow + grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `
            radial-gradient(circle at center, rgba(255,125,40,0.25), transparent 70%),
            radial-gradient(1200px 800px at 0% 0%, rgba(255,125,40,0.15), transparent 80%),
            radial-gradient(1000px 700px at 100% 100%, rgba(255,125,40,0.15), transparent 80%)
          `,
					filter: "blur(100px)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.04] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.25)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.25)_96%)] bg-[size:28px_28px]"
			/>

			{/* Heading */}
			<motion.h2
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeUp}
				className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-center mb-6">
				<span className="text-white">Our</span>{" "}
				<span className="text-orange-500">Machinery</span>
			</motion.h2>
			<div className="mx-auto mb-14 h-1 w-28 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

			{/* Grid (max 2 cols, centered) */}
			<div className="mx-auto grid max-w-5xl grid-cols-1 sm:grid-cols-2 gap-8">
				{solutions.map((item, index) => (
					<motion.article
						key={item.title}
						custom={index}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-lg transition hover:border-orange-500/40 hover:shadow-orange-500/20">
						{/* Image */}
						<div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl">
							<Image
								src={item.image}
								alt={item.title}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 50vw"
								className="object-cover transition-transform duration-700 group-hover:scale-[1.07]"
								priority={index < 2}
							/>
							<div className="absolute inset-0 bg-gradient-to-b from-black/40 to-transparent" />

							{/* Floating index chip */}
							<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-orange-400/50 bg-black/50 px-3 py-1 text-xs font-semibold tracking-wide text-orange-300 backdrop-blur-md shadow-md">
								#{String(index + 1).padStart(2, "0")}
							</div>

							{/* Description slide-up */}
							<div className="absolute inset-x-0 bottom-0 translate-y-full bg-black/70 backdrop-blur-md p-5 transition-transform duration-500 group-hover:translate-y-0">
								<p className="text-sm text-gray-200 leading-relaxed">
									{item.description}
								</p>
							</div>
						</div>

						{/* Title bar */}
						<div className="flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 px-4 py-4 text-center text-base font-semibold tracking-wide text-white rounded-b-2xl">
							{item.title}
						</div>
					</motion.article>
				))}
			</div>
		</section>
	);
}
