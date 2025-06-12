"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
	{
		title: "CONE CRUSHERS",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729230/th_qpyonz.jpg",
		description:
			"Efficient crushing equipment ideal for secondary and tertiary crushing of hard materials.",
	},
	{
		title: "JAW CRUSHERS",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729320/th_1_vspzad.jpg",
		description:
			"Powerful primary crushers built for breaking down large rocks with ease and precision.",
	},
	{
		title: "SCREEN'S WIRE MESH",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749730742/woven-mining-screen-1_ehbaqs.jpg",
		description:
			"Durable and efficient wire mesh screens designed for optimal performance in mineral processing and mining applications.",
	},
	{
		title: "VSI CRUSHERS",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749731196/th_n3jlvm.jpg",
		description:
			"High-speed impact crushers designed for producing fine, cubical aggregates in construction and mining.",
	},
];

const Products = () => {
	return (
		<section className="py-16 px-4 sm:px-8 lg:px-20">
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-3xl sm:text-4xl font-bold text-center  mb-12 relative">
				Our Products
				<div className="h-1 w-24 bg-orange-500 mx-auto mt-2" />
			</motion.h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{products.map((item, index) => (
					<motion.div
						key={index}
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						className="relative group bg-white shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden">
						<div className="relative w-full h-64 overflow-hidden">
							<Image
								src={item.image}
								alt={item.title}
								fill
								className="object-cover transition-transform duration-300 group-hover:scale-105"
							/>
							<div className="absolute bottom-0 left-0 right-0 bg-orange-600 text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
								<p className="text-sm">{item.description}</p>
							</div>
						</div>

						<div className="bg-orange-600 text-white py-3 text-center font-semibold text-base">
							{item.title}
						</div>
					</motion.div>
				))}
			</div>
		</section>
	);
};

export default Products;
