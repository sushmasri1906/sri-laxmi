"use client";

import Image from "next/image";
import React from "react";

const facilityImages = [
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450831/53_atieqt.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450836/57_yd0qan.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450833/55_qy41an.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450783/20_wt3unh.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450717/3_xfpwdc.png",
	"https://res.cloudinary.com/dk0smdu0d/image/upload/v1756450831/51_ulgzhg.png",
];

const Facility = () => {
	return (
		<section className="bg-black px-6 sm:px-12 lg:px-24 py-12 sm:py-16 lg:py-20 text-center">
			<h2 className="text-3xl font-bold text-orange-400 mb-4">
				Facility & Infrastructure
			</h2>
			<p className="max-w-3xl mx-auto text-lg text-gray-300 leading-relaxed">
				Located in the heart of Rani Gunj, Secunderabad, our modern production
				facility is equipped to manufacture and deliver precision-engineered
				machinery within short turnaround times.
			</p>

			<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
				{facilityImages.map((url, index) => (
					<div key={index} className="overflow-hidden rounded-lg shadow-lg">
						<Image
							src={url}
							alt={`Facility Image ${index + 1}`}
							width={800}
							height={450}
							className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
						/>
					</div>
				))}
			</div>
		</section>
	);
};

export default Facility;
