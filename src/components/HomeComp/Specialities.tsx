"use client";

import { FiClock, FiMail, FiMapPin } from "react-icons/fi";
import { MdVerified } from "react-icons/md";

export default function Specialities() {
	const items = [
		{
			icon: <FiClock size={22} className="text-orange-400" />,
			title: "Timely Delivery",
			desc: "We prioritize rapid dispatch to keep your operations moving - fast and reliable, every time.",
		},
		{
			icon: <FiMail size={22} className="text-orange-400" />,
			title: "24/7 Support",
			desc: "Round-the-clock assistance with most support tickets resolved within 24 hours.",
		},
		{
			icon: <FiMapPin size={22} className="text-orange-400" />,
			title: "Professional Training",
			desc: "On-site and remote training so your teams can operate with confidence and efficiency.",
		},
		{
			icon: <MdVerified size={22} className="text-orange-400" />,
			title: "Fail-Safe Commissioning",
			desc: "Rigorous commissioning & QA to ensure safe, seamless, production-ready operation.",
		},
	];

	return (
		<section className="relative w-full overflow-hidden bg-[#0b0b0b] text-white">
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
				className="pointer-events-none absolute inset-0 -z-10 opacity-[0.05] bg-[linear-gradient(transparent_95%,rgba(255,255,255,0.35)_96%),linear-gradient(90deg,transparent_95%,rgba(255,255,255,0.35)_96%)] bg-[size:24px_24px]"
			/>

			<div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-12 py-16 md:py-20">
				{/* Heading */}
				<div className="text-center">
					<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
						<span className="text-white">Our</span>{" "}
						<span className="text-orange-500">Specialities</span>
					</h2>
					<div className="mx-auto mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-orange-500 via-orange-400 to-orange-500" />
				</div>

				{/* Cards */}
				<div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
					{items.map((it) => (
						<div
							key={it.title}
							className="group relative flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset] transition hover:-translate-y-0.5 hover:border-orange-500/30 hover:bg-white/[0.07] focus-within:border-orange-500/40">
							{/* Icon badge */}
							<div className="mb-4 inline-flex items-center justify-center rounded-xl  p-2 ring-1 ring-white/10">
								{it.icon}
							</div>

							{/* Title */}
							<h3 className="text-lg font-semibold text-white">{it.title}</h3>

							{/* Description */}
							<p className="mt-2 text-sm leading-relaxed text-zinc-300">
								{it.desc}
							</p>

							{/* Decorative underline on hover */}
							<span className="mt-4 h-[2px] w-0 bg-gradient-to-r from-orange-500 to-orange-400 transition-all duration-300 group-hover:w-16" />

							{/* Invisible link target for keyboard focus (optional pattern) */}
							<a
								href="#"
								aria-label={it.title}
								className="absolute inset-0 rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500"
								onClick={(e) => e.preventDefault()}
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
