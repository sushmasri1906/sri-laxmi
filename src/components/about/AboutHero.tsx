"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutHero = () => {
	return (
		<section className="relative min-h-screen px-6 sm:px-12 lg:px-24 flex items-center justify-center text-white overflow-hidden">
			{/* Background Image Layer */}
			<div
				className="absolute inset-0 bg-cover bg-center scale-110"
				style={{
					backgroundImage:
						"url('https://res.cloudinary.com/dgulr1hgd/image/upload/v1749712873/abouthero_donapi.jpg')",
				}}
			/>

			{/* Animated Content with blurred background */}
			<motion.div
				initial={{ opacity: 0, y: 40 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.8, ease: "easeOut" }}
				className="relative z-10 max-w-2xl w-full p-4 sm:p-10 rounded-xl backdrop-blur-sm bg-white/10 border border-white/20 shadow-lg">
				<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-orange-500 mb-6 text-center">
					About Us
				</h1>
				<p className="text-base sm:text-lg lg:text-xl text-white font-medium leading-relaxed text-center">
					We trade and manufacture heavy machinery parts and custom
					fabrications.
				</p>
			</motion.div>
		</section>
	);
};

export default AboutHero;
