"use client";
import Image from "next/image";
import { useState, useId } from "react";
import { FiChevronDown, FiHelpCircle } from "react-icons/fi";

const faqs = [
	{
		question: "What products does Sri Laxmi Sales Corporation offer?",
		answer:
			"We specialize in heavy machinery spares, wire mesh, conveyor components, and crusher parts to support the mining and construction industry.",
	},
	{
		question: "Can I place bulk or customized orders?",
		answer:
			"Yes, we handle both bulk and customized orders tailored to your specific machinery and operational requirements.",
	},
	{
		question: "Do you provide delivery and installation support?",
		answer:
			"We offer reliable delivery services and can guide you through installation and fitting processes for key components.",
	},
];

export default function Faq() {
	const [activeIndex, setActiveIndex] = useState<number | null>(0);
	const sectionId = useId();

	const toggle = (i: number) => {
		setActiveIndex((prev) => (prev === i ? null : i));
	};

	return (
		<section
			className="relative bg-[#0b0b0b] text-white"
			aria-labelledby={`${sectionId}-title`}>
			{/* subtle depth */}
			<div
				aria-hidden
				className="pointer-events-none absolute inset-0"
				style={{
					background:
						"radial-gradient(900px 420px at 50% -10%, rgba(255,125,40,0.16), transparent), radial-gradient(700px 320px at 0% 100%, rgba(255,125,40,0.10), transparent)",
				}}
			/>

			<div className="relative mx-auto max-w-6xl px-6 py-16">
				<div className="grid items-center gap-12 md:grid-cols-2">
					{/* Left: Visual + CTA */}
					<div>
						<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.04)_inset]">
							<Image
								src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739210128/contact-us-img_xfcru4.webp"
								alt="Support team at Sri Laxmi"
								width={1200}
								height={900}
								className="h-auto w-full object-cover"
								priority
							/>
						</div>

						<h3 className="mt-6 text-2xl font-bold tracking-tight">
							Still have questions?
						</h3>
						<p className="mt-2 text-sm text-zinc-300">
							We&apos;re here to help with machinery spares, logistics, or any
							product-related queries.
						</p>

						<div className="mt-5 flex flex-wrap gap-3">
							<a
								href="mailto:support@srilaxmisales.com"
								className="rounded-xl bg-orange-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-orange-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
								Contact Support
							</a>
						</div>
					</div>

					{/* Right: FAQ */}
					<div>
						<div className="mb-2 inline-flex items-center gap-2 rounded-full border border-orange-500/40 bg-orange-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-orange-400">
							<FiHelpCircle className="opacity-80" />
							FAQs
						</div>

						<h2
							id={`${sectionId}-title`}
							className="text-3xl md:text-4xl font-extrabold tracking-tight">
							FAQs – Sri Laxmi Sales Corporation
						</h2>
						<p className="mt-3 text-sm md:text-base text-zinc-300">
							Explore common queries about our offerings, support, and
							operations. We’re committed to serving your industrial needs
							efficiently.
						</p>

						<ul className="mt-8 space-y-3">
							{faqs.map((faq, i) => {
								const open = activeIndex === i;
								const itemId = `${sectionId}-item-${i}`;
								return (
									<li
										key={faq.question}
										className="rounded-2xl border border-white/10 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.03)_inset]">
										{/* Button-like header (accessible) */}
										<button
											aria-controls={`${itemId}-panel`}
											aria-expanded={open}
											onClick={() => toggle(i)}
											className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left transition hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-500">
											<span
												className={`text-base font-semibold ${
													open ? "text-white" : "text-zinc-100"
												}`}>
												{faq.question}
											</span>
											<FiChevronDown
												className={`shrink-0 text-orange-400 transition-transform duration-300 ${
													open ? "rotate-180" : "rotate-0"
												}`}
												size={20}
												aria-hidden
											/>
										</button>

										{/* Collapsible panel with smooth animation */}
										<div
											id={`${itemId}-panel`}
											role="region"
											aria-labelledby={itemId}
											className={`grid overflow-hidden transition-all duration-300 ease-out ${
												open
													? "grid-rows-[1fr] opacity-100"
													: "grid-rows-[0fr] opacity-0"
											}`}>
											<div className="min-h-0 px-5 pb-4">
												<p className="text-sm leading-relaxed text-zinc-300">
													{faq.answer}
												</p>
											</div>
										</div>
									</li>
								);
							})}
						</ul>

						{/* small note */}
						<p className="mt-6 text-xs text-zinc-400">
							Can’t find what you’re looking for?{" "}
							<a
								href="/contact"
								className="font-medium text-orange-400 underline-offset-4 hover:underline">
								Reach our team
							</a>
							.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
