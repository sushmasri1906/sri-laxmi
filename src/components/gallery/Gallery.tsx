"use client";

import Image from "next/image";
import React from "react";

const images = [
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450844/67_jpztmg.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450842/58_ayazcr.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450842/66_sqznxa.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450841/65_kzyymg.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450841/64_kquxl1.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450838/61_dzmedq.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450838/62_upedgh.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450837/60_viuhdw.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450836/56_hw7j6r.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450836/59_rkpzwn.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450836/57_yd0qan.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450833/55_qy41an.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450831/53_atieqt.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450832/54_fp7nhb.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450831/51_ulgzhg.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450831/52_guqt24.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450830/50_ey5ixo.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450829/49_jlrgtr.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450828/48_ku8jji.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450826/47_tffwss.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450825/46_tzygtj.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450825/45_tuqyrj.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450824/43_fmrqy0.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450805/15_ng6lcg.png",
];

export default function Gallery() {
	return (
		<section className="relative w-full overflow-hidden bg-[#0b0b0b]">
			{/* soft orange glow + subtle grid for depth */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(900px 420px at 50% -10%, rgba(255,125,40,0.18), transparent), radial-gradient(700px 320px at 0% 100%, rgba(255,125,40,0.12), transparent)",
				}}
			/>
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0 opacity-[0.05] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.3)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.3)_96%)] bg-[size:24px_24px]"
			/>

			<div className="relative mx-auto max-w-7xl px-4 sm:px-8 lg:px-10 py-16 sm:py-20">
				{/* header */}
				<header className="text-center">
					<span className="inline-block rounded-full border mt-10  border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
						Gallery
					</span>
					<h2 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white">
						Our <span className="text-orange-500">Gallery</span>
					</h2>
					<div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
					<p className="mx-auto mt-5 max-w-2xl text-sm sm:text-base text-zinc-400">
						A curated look at our work and workshop-polished, practical, and
						production-ready.
					</p>
				</header>

				{/* masonry grid */}
				<div className="mt-12 sm:mt-14 columns-1 gap-4 sm:columns-2 md:columns-3 xl:columns-4 [column-fill:_balance]">
					{images.map((src, idx) => (
						<figure
							key={idx}
							className="mb-4 break-inside-avoid group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset] transition hover:border-orange-500/30 hover:shadow-lg">
							{/* image */}
							<Image
								src={src}
								alt={`Gallery Image ${idx + 1}`}
								width={900}
								height={600}
								loading="lazy"
								sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1536px) 33vw, 25vw"
								className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
							/>

							{/* overlay */}
						</figure>
					))}
				</div>

				{/* bottom CTA strip */}
				<div className="mt-12 rounded-2xl border border-white/10 bg-gradient-to-br from-orange-500/10 via-transparent to-white/5 p-5 text-center">
					<p className="text-sm text-zinc-300">
						Want high-res shots or a factory tour?{" "}
						<a
							href="/contact"
							className="font-semibold text-orange-400 underline-offset-4 hover:underline">
							Get in touch
						</a>
						.
					</p>
				</div>
			</div>
		</section>
	);
}
