"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const solutions = [
	{
		title: "VERTICAL LATHE MACHINE",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729846/vertical-turning-lathe-machine-1000x1000_bsyjet.jpg",
		description:
			"High-performance vertical lathe machine engineered for precise turning of heavy, large-diameter workpieces. Ideal for industries requiring accuracy in vertical machining of metals and alloys.",
	},
	{
		title: "LATHE MACHINE",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729922/precision_qgvgsr.jpg",
		description:
			"Versatile and precision-focused lathe machine designed for shaping, cutting, and drilling materials with efficiency. Suitable for metalworking shops, tool rooms, and industrial manufacturing.",
	},
	{
		title: "POWER LOOMING MACHINE",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749729989/semi-automatic-power-looms-machine-770_bhd722.jpg",
		description:
"Efficient and semi-automatic power loom crafted for high-speed textile weaving. Perfect for producing consistent fabric quality across a range of materials in medium to large-scale textile units."


	},
	{
		title: "ARC WELDING MACHINE",
		image:
			"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749730052/61PIAB7d-JL._SL1350__auht3j.jpg",
		description:
"Durable and powerful arc welding machine designed for seamless welding of metals. Ensures strong joints and smooth operation, making it ideal for construction, fabrication, and repair work."

	},
];

const Solution = () => {
	return (
		<section className="py-16 px-4 sm:px-8 lg:px-20">
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-3xl sm:text-4xl font-bold text-center  mb-12 relative">
				Our Machinery
				<div className="h-1 w-24 bg-orange-500 mx-auto mt-2" />
			</motion.h2>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{solutions.map((item, index) => (
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

export default Solution;
