"use client";

import React from "react";
import Image from "next/image";
import { FiCheckCircle } from "react-icons/fi";
import { motion } from "framer-motion";

const points = [
	"Over 26 years of experience in heavy machinery design and production.",
	"Led by Sri Janardhan Guthi with deep industry knowledge.",
	"Team of 10 skilled and 13 semi-skilled professionals.",
	"Guided by technically sound supervisors for quality delivery.",
	"Provides in-office and onsite technical support.",
	"Every project is customized to meet client-specific needs.",
];

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.15,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Team = () => {
	return (
		<section className="bg-black text-gray-200 px-6 sm:px-12 lg:px-24 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
			<motion.div
				initial="hidden"
				whileInView="show"
				viewport={{ once: true }}
				variants={containerVariants}
				className="space-y-6">
				<motion.h2
					variants={itemVariants}
					className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-orange-400">
					Expertise & Team
				</motion.h2>

				<motion.h3
					variants={itemVariants}
					className="text-3xl sm:text-4xl font-bold text-white">
					Meet the Leadership Behind Our Work
				</motion.h3>

				<motion.ul
					variants={containerVariants}
					className="space-y-4 text-base sm:text-md">
					{points.map((text, idx) => (
						<motion.li
							key={idx}
							variants={itemVariants}
							className="flex items-start gap-3">
							<FiCheckCircle className="text-orange-400 mt-1" size={16} />
							<span className="text-gray-300 leading-relaxed">{text}</span>
						</motion.li>
					))}
				</motion.ul>
			</motion.div>

			<motion.div
				initial={{ opacity: 0, scale: 0.95 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				viewport={{ once: true }}
				className="w-full">
				<Image
					src="https://res.cloudinary.com/dip2khkyo/image/upload/v1739209741/group-engineer-manager-factory-workers-team-standing-against-production-line-194332375_miqdad.jpg"
					alt="Our Team"
					width={400}
					height={300}
					className="rounded-xl shadow-xl object-cover w-full h-auto"
				/>
			</motion.div>
		</section>
	);
};

export default Team;
