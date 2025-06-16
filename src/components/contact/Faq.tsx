"use client";
import Image from "next/image";
import { useState } from "react";

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
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section className="bg-[#0f0f0f] text-white px-6 py-10">
			<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
				{/* Left Content */}
				<div>
					<div className="overflow-hidden mb-6 rounded-lg">
						<Image
							src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739210128/contact-us-img_xfcru4.webp"
							alt="Support Sri Laxmi"
							width={600}
							height={600}
							className="w-full h-auto object-cover"
						/>
					</div>
					<h3 className="text-2xl font-bold">Still Have Questions?</h3>
					<p className="text-gray-300 mt-2">
						We&apos;re here to help with machinery spares, logistics, or any
						product-related queries.
					</p>
					<button className="mt-4 px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold">
						Contact Support
					</button>
				</div>

				{/* FAQ Section */}
				<div>
					<h2 className="text-4xl font-bold leading-tight mb-4">
						FAQs – Sri Laxmi Sales Corporation
					</h2>
					<p className="text-gray-300 mb-6">
						Explore common queries about our offerings, support, and operations.
						We&apos;re committed to serving your industrial needs efficiently.
					</p>
					<div className="space-y-4">
						{faqs.map((faq, i) => (
							<div
								key={i}
								onClick={() => setActiveIndex(i)}
								className={`p-5 rounded-xl cursor-pointer transition ${
									activeIndex === i
										? "bg-orange-600 text-white"
										: "bg-[#1a1a1a] text-gray-200 hover:bg-[#2a2a2a]"
								}`}>
								<h4 className="font-semibold text-lg">{faq.question}</h4>
								{activeIndex === i && (
									<p className="text-sm mt-2 text-white">{faq.answer}</p>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
