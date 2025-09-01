"use client";

import Image from "next/image";
import { FiSettings, FiBox, FiChevronRight } from "react-icons/fi";

export default function HomeAbout() {
	return (
		<section className="relative w-full overflow-hidden bg-[#0b0b0b] text-white">
			{/* orange ambient glow + subtle grid */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 -z-10"
				style={{
					background: `
            radial-gradient(circle at center, rgba(255,125,40,0.35), transparent 70%),
            radial-gradient(1200px 800px at 0% 0%, rgba(255,125,40,0.18), transparent 80%),
            radial-gradient(1000px 700px at 100% 100%, rgba(255,125,40,0.18), transparent 80%)
          `,
					filter: "blur(80px)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.35)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.35)_96%)] bg-[size:24px_24px]"
			/>

			<div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-16 md:py-20">
				<div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
					{/* Left content */}
					<div>
						<span className="inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
							Welcome to Sri Laxmi Sales Corporation
						</span>

						<h2 className="mt-4 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
							<span className="text-white">Conveyor Spares for</span>{" "}
							<span className="text-orange-500">Industrial Performance</span>
						</h2>

						<p className="mt-4 text-base md:text-lg leading-relaxed text-zinc-300">
							We specialize in high-performance conveyor spares that enhance
							efficiency across industries. With sustainability in focus, we
							leverage advanced technology and craftsmanship to keep your
							operations productive and reliable.
						</p>

						{/* Features */}
						<div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
							<div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition hover:border-orange-500/30 hover:bg-white/[0.07]">
								<div className="mb-3 inline-flex rounded-xl bg-orange-500/15 p-2">
									<FiBox className="text-orange-400" size={22} />
								</div>
								<h4 className="text-lg font-semibold">
									Comprehensive Product Range
								</h4>
								<p className="mt-1 text-sm text-zinc-300">
									Rollers, pulleys, belts, frames & more - designed for durability
									and industrial demands.
								</p>
							</div>

							<div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition hover:border-orange-500/30 hover:bg-white/[0.07]">
								<div className="mb-3 inline-flex rounded-xl bg-orange-500/15 p-2">
									<FiSettings className="text-orange-400" size={22} />
								</div>
								<h4 className="text-lg font-semibold">
									Engineered for Efficiency
								</h4>
								<p className="mt-1 text-sm text-zinc-300">
									Built to reduce downtime and maximize output - every component
									is tested and field-proven.
								</p>
							</div>
						</div>

						{/* Summary strip */}
						<div className="mt-7 rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
							<p className="text-sm leading-relaxed text-zinc-200">
								<span className="font-semibold text-white">
									Trusted Solutions:
								</span>{" "}
								Fast delivery, reliable service, and performance-driven parts
								for long-term value.{" "}
								<span className="font-semibold text-white">
									Industry Versatility:
								</span>{" "}
								Crushing, mining, bulk material handling—if it moves, we support
								it.
							</p>
						</div>

						{/* CTAs */}
						<div className="mt-8 flex flex-wrap items-center gap-3">
							<a
								href="/about"
								className="inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
								More About Us <FiChevronRight />
							</a>
							<a
								href="/contact"
								className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-5 py-2.5 text-sm font-semibold text-zinc-100 transition hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
								Request a Quote
							</a>
						</div>
					</div>

					{/* Right image */}
					<div className="relative h-[420px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
						<Image
							src="https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450838/61_dzmedq.png"
							alt="Conveyor Spares"
							fill
							priority
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover transition-transform duration-700 hover:scale-[1.03]"
						/>
						{/* top badge */}
						<div className="absolute left-5 top-5 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-300">
							Featured
						</div>
						{/* floating CTA card */}
						<div className="absolute bottom-5 right-5 hidden w-[260px] rounded-xl border border-white/10 bg-black/50 p-4 text-sm shadow-lg backdrop-blur md:block">
							<p className="font-semibold text-white">
								Your Trusted Conveyor Partner
							</p>
							<p className="mt-1 text-xs text-zinc-300">
								Reliable parts. Responsive support.
							</p>
							<a
								href="/contact"
								className="mt-3 inline-block rounded-lg bg-orange-600 px-3 py-1.5 font-semibold text-white transition hover:bg-orange-700">
								Request a Quote
							</a>
						</div>
						{/* edge gradients for depth */}
						<div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/40 to-transparent" />
						<div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
					</div>
				</div>

				{/* quick stats row (optional, looks pro) */}
				<div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
					{[
						{ k: "Years", v: "26+" },
						{ k: "Clients", v: "250+" },
						{ k: "SKUs", v: "1,500+" },
						{ k: "On-time", v: "98%" },
						{ k: "Uptime Gain", v: "↑12%" },
						{ k: "Skilled", v: "10+" },
					].map((s) => (
						<div
							key={s.k}
							className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-center">
							<div className="text-xl font-extrabold text-white sm:text-2xl">
								{s.v}
							</div>
							<div className="mt-1 text-xs text-zinc-300">{s.k}</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
