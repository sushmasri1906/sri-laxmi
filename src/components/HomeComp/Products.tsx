"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const products = [
	{
		title: "Waterwell & Supplies",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1749650464/product-31_sdcztw.jpg",
		description:
			"Offering comprehensive drilling solutions for water wells, supported by reliable equipment, accessories, and after-sales service across varied terrains.",
	},
	{
		title: "Geological Explorations",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1749650474/2_pxzgtg.jpg",
		description:
			"Unlock subsurface potential with cutting-edge geological exploration rigs and technology designed for precision, efficiency, and productivity.",
	},
	{
		title: "Infrastructure & Energy",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1749650490/3_h5rgmu.jpg",
		description:
			"Supporting infrastructure development with drilling solutions for roadways, railways, hydropower, and energy projects that demand durability and performance.",
	},
	{
		title: "Minerals & Metal Mining",
		image:
			"https://res.cloudinary.com/djthwunnh/image/upload/v1749650495/4_es1yry.jpg",
		description:
			"Robust and reliable equipment designed for the mineral and metal exploration industry, ensuring high performance in challenging conditions.",
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
				OUR Products
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
