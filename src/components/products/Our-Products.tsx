"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Product = {
	title: string;
	image: string;
	description: string;
};

const defaultProducts: Product[] = [
	{
		title: "CONE CRUSHERS",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450807/20_b42enn.png",
		description:
			"Efficient crushers for secondary/tertiary stages, built for hard, abrasive feeds.",
	},
	{
		title: "JAW CRUSHERS",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450805/15_ng6lcg.png",
		description:
			"High-throughput primary crushers to break large boulders with consistent sizing.",
	},
	{
		title: "SCREENS WIRE MESH",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450825/45_tuqyrj.png",
		description:
			"Wear-resistant woven mesh for screening & classification in mining and minerals.",
	},
	{
		title: "CONVEYORS",
		image:
			"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450838/61_dzmedq.png",
		description:
			"Durable conveyor systems ensuring smooth material handling across operations.",
	},
];

export default function Products({
	items = defaultProducts,
}: {
	items?: Product[];
}) {
	const prefersReducedMotion = useReducedMotion();
	const fadeInUp = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
		visible: (i = 0) => ({
			opacity: 1,
			y: 0,
			transition: { duration: 0.5, delay: i * 0.08, ease: "easeOut" },
		}),
	};

	return (
		<section className="relative bg-[#0b0b0b] text-white">
			{/* orange depth background */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `
            radial-gradient(circle at center, rgba(255,125,40,0.35), transparent 70%),
            radial-gradient(1200px 800px at 0% 0%, rgba(255,125,40,0.18), transparent 80%),
            radial-gradient(1000px 700px at 100% 100%, rgba(255,125,40,0.18), transparent 80%)
          `,
					filter: "blur(60px)",
				}}
			/>
			{/* subtle grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.25)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.25)_96%)] bg-[size:24px_24px]"
			/>

			<div className="relative mx-auto max-w-7xl px-6 sm:px-10 py-16 sm:py-20">
				{/* heading */}
				<motion.h2
					initial="hidden"
					whileInView="visible"
					viewport={{ once: true, amount: 0.3 }}
					variants={fadeInUp}
					className="mt-10 text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
					<span className="text-white">Our</span>{" "}
					<span className="text-orange-500">Products</span>
				</motion.h2>
				<div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />

				{/* alternating product rows */}
				<div className="mt-12 sm:mt-16 space-y-8 sm:space-y-10">
					{items.map((item, idx) => {
						const reverse = idx % 2 === 1;
						return (
							<motion.article
								key={item.title}
								custom={idx}
								initial="hidden"
								whileInView="visible"
								viewport={{ once: true, amount: 0.25 }}
								variants={fadeInUp}
								className={[
									"relative grid items-stretch gap-6 overflow-hidden rounded-2xl",
									"border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]",
									"transition hover:border-orange-500/30 hover:bg-white/[0.07]",
									"p-5 sm:p-6 md:p-7",
									"md:grid-cols-2",
									reverse ? "md:[&>*:first-child]:order-2" : "",
								].join(" ")}>
								{/* image */}
								<div className="relative">
									<div className="relative overflow-hidden rounded-xl border border-white/10">
										<Image
											src={item.image}
											alt={item.title}
											width={1200}
											height={800}
											sizes="(max-width: 768px) 100vw, 50vw"
											className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
											priority={idx < 1}
										/>
										<div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5" />
										<div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/50 to-transparent" />
									</div>
								</div>

								{/* content */}
								<div className="flex flex-col justify-center">
									<div className="flex items-center gap-3">
										<span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
											#{String(idx + 1).padStart(2, "0")}
										</span>
									</div>

									<h3 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight">
										{item.title}
									</h3>

									<p className="mt-3 text-base sm:text-lg leading-relaxed text-zinc-300">
										{item.description}
									</p>
								</div>

								{/* side accent */}
								<div
									aria-hidden
									className={[
										"absolute top-0 bottom-0 w-1 rounded-full",
										"bg-gradient-to-b from-orange-500/40 via-orange-500/10 to-transparent",
										reverse ? "right-0" : "left-0",
									].join(" ")}
								/>
							</motion.article>
						);
					})}
				</div>
			</div>
		</section>
	);
}
