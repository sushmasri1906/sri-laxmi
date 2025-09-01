"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

const products = [
	{
		title: "CONE CRUSHERS",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729230/th_qpyonz.jpg",
		description:
			"Efficient crushers for secondary/tertiary stages, built for hard, abrasive feeds.",
	},
	{
		title: "JAW CRUSHERS",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729320/th_1_vspzad.jpg",
		description:
			"High-throughput primary crushers to break large boulders with consistent sizing.",
	},
	{
		title: "SCREEN'S WIRE MESH",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749730742/woven-mining-screen-1_ehbaqs.jpg",
		description:
			"Wear-resistant woven mesh for screening & classification in mining and minerals.",
	},
	{
		title: "VSI CRUSHERS",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749731196/th_n3jlvm.jpg",
		description:
			"High-speed impactors delivering fine, cubical aggregates for premium mixes.",
	},
];

export default function Products() {
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
		<section className="relative overflow-hidden bg-[#0b0b0b] py-16 px-4 text-white sm:px-8 lg:px-20">
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

			{/* heading */}
			<motion.h2
				initial="hidden"
				whileInView="visible"
				viewport={{ once: true, amount: 0.3 }}
				variants={fadeUp}
				className="text-center text-3xl font-extrabold sm:text-4xl lg:text-5xl">
				<span className="text-white">Our</span>{" "}
				<span className="text-orange-500">Products</span>
			</motion.h2>
			<div className="mx-auto mb-10 mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

			{/* grid */}
			<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
				{products.map((item, index) => (
					<motion.article
						key={item.title}
						custom={index}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, amount: 0.25 }}
						variants={fadeUp}
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition hover:-translate-y-0.5 hover:border-orange-500/30 hover:bg-white/[0.07]">
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
							{/* top gradient + index chip */}
							<div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
							<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-black/40 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-orange-300 backdrop-blur">
								#{String(index + 1).padStart(2, "0")}
							</div>
							{/* bottom reveal description */}
							<div className="absolute inset-x-0 bottom-0 translate-y-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 transition-transform duration-300 group-hover:translate-y-0">
								<p className="text-xs sm:text-sm text-zinc-100">
									{item.description}
								</p>
							</div>
						</div>

						{/* title bar + CTA row */}
						<div className="flex flex-col gap-3 px-4 py-4">
							<h3 className="text-base font-semibold sm:text-sm md:text-base lg:text-sm xl:text-base">
								{item.title}
							</h3>
						</div>
					</motion.article>
				))}
			</div>
		</section>
	);
}
