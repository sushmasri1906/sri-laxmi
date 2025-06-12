"use client";

import Image from "next/image";
import { FiSettings, FiBox } from "react-icons/fi";

const HomeAbout = () => {
	return (
		<section className="relative bg-black text-white w-full px-6 md:px-16 py-20">
			<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
				{/* Left Content */}
				<div>
					<p className="text-sm font-semibold text-orange-400 uppercase tracking-wide mb-3">
						Welcome to Sri Laxmi Sales Corporation
					</p>
					<h2 className="text-xl md:text-5xl font-bold text-white mb-6 leading-tight">
						Conveyor Spares for Industrial Performance
					</h2>
					<p className="text-lg text-gray-300 mb-10 leading-relaxed">
						We specialize in high-performance conveyor spares that enhance
						efficiency across industries. With sustainability in focus, we
						leverage advanced technology and craftsmanship to ensure your
						operations stay productive and reliable.
					</p>

					{/* Features */}
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">
						<div className="flex items-start gap-5">
							<FiBox className="text-orange-500 mt-1 shrink-0" size={32} />
							<div>
								<h4 className="text-lg font-semibold text-white mb-1">
									Comprehensive Product Range
								</h4>
								<p className="text-sm text-gray-400 leading-relaxed">
									Supplying rollers, pulleys, belts, frames & more—designed for
									durability and industrial demands.
								</p>
							</div>
						</div>

						<div className="flex items-start gap-5">
							<FiSettings className="text-orange-500 mt-1 shrink-0" size={32} />
							<div>
								<h4 className="text-lg font-semibold text-white mb-1">
									Engineered for Efficiency
								</h4>
								<p className="text-sm text-gray-400 leading-relaxed">
									Built to reduce downtime and maximize output—each component is
									quality tested and field-proven.
								</p>
							</div>
						</div>
					</div>

					{/* Summary Box */}
					<div className="bg-gray-800 border border-gray-700 rounded-lg p-6 shadow-inner mb-10">
						<p className="text-sm text-gray-300 leading-relaxed space-y-2">
							<strong className="text-white">Trusted Solutions:</strong> Fast
							delivery, reliable service, and performance-driven parts for
							long-term value. <br />
							<strong className="text-white">Industry Versatility:</strong>{" "}
							Crushing, mining, bulk material handling—you name it, we support
							it.
						</p>
					</div>

					<a
						href="/about"
						className="inline-block px-6 py-3 bg-orange-500 text-white font-semibold rounded-md shadow hover:bg-orange-600 transition">
						More About Us
					</a>
				</div>

				{/* Right Image */}
				<div className="relative w-full h-[400px] md:h-[500px] overflow-hidden shadow-xl">
					<Image
						src="https://res.cloudinary.com/dgulr1hgd/image/upload/v1749731666/conveyor_belt_system_for_packaging_wgbs8n.png"
						alt="Conveyor Spares"
						layout="fill"
						objectFit="cover"
						className=""
					/>

					{/* Floating CTA */}
					<div className="absolute top-6 right-6 bg-orange-600 text-white p-4 rounded-lg shadow-md text-sm hidden md:block">
						<p className="font-semibold mb-1">Your Trusted Conveyor Partner</p>
						<a
							href="/contact"
							className="underline text-white hover:text-gray-200">
							Request a Quote
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default HomeAbout;
