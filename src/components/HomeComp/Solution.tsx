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
	{
		title: "POWER LOOMING MACHINE",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729989/semi-automatic-power-looms-machine-770_bhd722.jpg",
		description:
			"Efficient semi-automatic power loom for high-speed textile weaving. Delivers consistent fabric quality across varied materials at scale.",
	},
	{
		title: "ARC WELDING MACHINE",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749730052/61PIAB7d-JL._SL1350__auht3j.jpg",
		description:
			"Durable, high-output arc welder for seamless joints and smooth operation—ideal for construction, fabrication, and repair workflows.",
	},
];

export default function Solution() {
	const prefersReducedMotion = useReducedMotion();

	const fadeUp = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
		}),
	};

	return (
		<section className="relative py-16 px-4 sm:px-8 lg:px-20 bg-[#0b0b0b] text-white overflow-hidden">
			{/* orange ambient glow + subtle grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `
            radial-gradient(circle at center, rgba(255,125,40,0.32), transparent 70%),
            radial-gradient(1200px 800px at 0% 0%, rgba(255,125,40,0.18), transparent 80%),
            radial-gradient(1000px 700px at 100% 100%, rgba(255,125,40,0.18), transparent 80%)
          `,
					filter: "blur(80px)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.3)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.3)_96%)] bg-[size:24px_24px]"
			/>

			<motion.h2
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeUp}
				className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-center mb-4">
				<span className="text-white">Our</span>{" "}
				<span className="text-orange-500">Machinery</span>
			</motion.h2>
			<div className="mx-auto mb-10 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

			<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
				{solutions.map((item, index) => (
					<motion.article
						key={item.title}
						custom={index}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.2 }}
						variants={fadeUp}
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition hover:border-orange-500/30 hover:bg-white/[0.07]">
						{/* image */}
						<div className="relative aspect-[4/3] overflow-hidden">
							<Image
								src={item.image}
								alt={item.title}
								fill
								sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
								className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
								priority={index < 2}
							/>
							{/* top gradient & title chip */}
							<div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
							<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/40 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-orange-300 backdrop-blur">
								#{String(index + 1).padStart(2, "0")}
							</div>
							{/* bottom reveal description */}
							<div className="absolute inset-x-0 bottom-0 translate-y-full bg-orange-500  p-4 transition-transform duration-300 group-hover:translate-y-0">
								<p className="text-xs sm:text-sm text-zinc-100">
									{item.description}
								</p>
							</div>
						</div>

						{/* title footer bar */}
						<div className="flex items-center justify-center bg-gradient-to-r from-orange-600 to-orange-500 px-3 py-3 text-center text-sm font-semibold text-white">
							{item.title}
						</div>
					</motion.article>
				))}
			</div>
		</section>
	);
}
