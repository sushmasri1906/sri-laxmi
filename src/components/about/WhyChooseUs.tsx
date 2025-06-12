"use client";

import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiStar, FiTruck, FiActivity } from "react-icons/fi";

const benefits = [
	{
		title: "20+ Years of Trusted Service",
		icon: FiClock,
	},
	{
		title: "Premium Quality from Reputed Brands",
		icon: FiStar,
	},
	{
		title: "Serving Crushers, Cement & Power Plants",
		icon: FiActivity,
	},
	{
		title: "On-Time Delivery with Competitive Pricing",
		icon: FiTruck,
	},
];

const cardVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: (i: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
};

const WhyChooseUs = () => {
	return (
		<section className="px-6 sm:px-12 lg:px-24 py-20 bg-black text-center">
			<h2 className="text-3xl font-bold text-orange-400 mb-10">
				Why Choose Us?
			</h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
				{benefits.map((item, idx) => {
					const Icon = item.icon;
					return (
						<motion.div
							key={idx}
							custom={idx}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true }}
							variants={cardVariants}
							className="group bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-orange-400 hover:shadow-orange-500/40 transition duration-300">
							<div className="mb-4 flex justify-center">
								<div className="w-14 h-14 flex items-center justify-center rounded-full bg-white/10 group-hover:bg-orange-500 transition duration-300">
									<Icon
										size={26}
										className="text-orange-400 group-hover:text-white transition"
									/>
								</div>
							</div>
							<h3 className="text-white font-medium text-lg group-hover:text-orange-300 transition">
								{item.title}
							</h3>
						</motion.div>
					);
				})}
			</div>
		</section>
	);
};

export default WhyChooseUs;
