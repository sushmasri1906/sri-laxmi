"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function AboutHero() {
	const prefersReducedMotion = useReducedMotion();

	const fadeUp = {
		hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
		visible: {
			opacity: 1,
			y: 0,
			transition: { duration: 0.6, ease: "easeOut" },
		},
	};

	return (
		<section className="relative min-h-[80vh] md:min-h-[88vh] flex items-center justify-center overflow-hidden text-white">
			{/* Background image */}
			<div
				className="absolute inset-0 bg-cover bg-center will-change-transform"
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dgulr1hgd/image/upload/v1749712873/abouthero_donapi.jpg')",
					transform: "scale(1.06)", // subtle zoom for depth
				}}
			/>

			{/* Orange ambient glow across the whole section */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-0"
				style={{
					background: `
            radial-gradient(circle at center, rgba(255,125,40,0.35), transparent 70%),
            radial-gradient(1200px 800px at 0% 0%, rgba(255,125,40,0.18), transparent 80%),
            radial-gradient(1000px 700px at 100% 100%, rgba(255,125,40,0.18), transparent 80%)
          `,
					filter: "blur(80px)",
				}}
			/>

			{/* Vignette + darkening overlay for legibility */}
			<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
			<div className="absolute inset-0 bg-black/20" />

			{/* Subtle grid texture */}
			<div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.35)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.35)_96%)] bg-[size:24px_24px]" />

			{/* Content */}
			<motion.div
				initial="hidden"
				animate="visible"
				variants={fadeUp}
				className="relative z-10 w-full px-6 sm:px-12 lg:px-24">
				<div className="mx-auto max-w-3xl">
					{/* Eyebrow/badge */}
					<div className="flex justify-center">
						<span className="mt-16 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
							Our Story
						</span>
					</div>

					{/* Card with backdrop blur */}
					<div className="mt-5 rounded-2xl border border-white/15 bg-white/10 p-6 sm:p-10 shadow-[0_0_0_1px_rgba(255,255,255,0.06)_inset] backdrop-blur-md">
						<h1 className="text-center text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
							<span className="text-white">About</span>{" "}
							<span className="text-orange-500">Us</span>
						</h1>

						<p className="mt-4 text-center text-base sm:text-lg lg:text-xl text-zinc-100/90 leading-relaxed">
							We trade and manufacture heavy machinery parts and precision
							fabrications—built for reliability on real production floors.
						</p>

						{/* Highlights */}
						<div className="mt-6 flex flex-wrap items-center justify-center gap-2 text-[12px] sm:text-xs text-zinc-200">
							<span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
								ISO-grade materials
							</span>
							<span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
								Custom fabrication
							</span>
							<span className="rounded-full border border-white/15 bg-white/10 px-3 py-1">
								On-site support
							</span>
						</div>

						{/* CTA row (optional) */}
						<div className="mt-7 flex flex-wrap items-center justify-center gap-3">
							<motion.a
								whileHover={{ y: prefersReducedMotion ? 0 : -1 }}
								whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
								href="/contact"
								className="rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
								Contact Us
							</motion.a>
							<motion.a
								whileHover={{ y: prefersReducedMotion ? 0 : -1 }}
								whileTap={{ scale: prefersReducedMotion ? 1 : 0.98 }}
								href="/machinery"
								className="rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
								View Machinery
							</motion.a>
						</div>
					</div>

					{/* Quick stats (adds credibility) */}
					<div className="mx-auto mt-8 grid max-w-3xl grid-cols-2 gap-3 sm:grid-cols-3 text-center">
						{[
							{ k: "Years", v: "26+" },
							{ k: "Clients", v: "250+" },
							{ k: "SKU's", v: "1,500+" },
						].map((stat) => (
							<div
								key={stat.k}
								className="rounded-xl border border-white/10 bg-white/5 px-4 py-3">
								<div className="text-2xl font-extrabold text-white">
									{stat.v}
								</div>
								<div className="mt-1 text-xs text-zinc-300">{stat.k}</div>
							</div>
						))}
					</div>
				</div>
			</motion.div>
		</section>
	);
}
