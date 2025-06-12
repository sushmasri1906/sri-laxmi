"use client";

import Slider from "react-slick";
import Image from "next/image";
import { motion } from "framer-motion";
const logos = [
	"https://res.cloudinary.com/degrggosz/image/upload/v1749730732/fba57ac41e9f8d98e5e9c977775933e5_kykam6.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749730731/5057-01_pwp5by.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749730728/company-logo-design-template-e089327a5c476ce5c70c74f7359c5898_screen_tii6aj.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749730727/logoyy48-01_asyhmp.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749730727/butterfly-colorful-logo-template_361591-1587_za4mud.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749730726/professional_20logo_cc8s5u.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749730725/stock-vector-minimalistic-circular-logo-sample-vector-2278726727_e3ns9s.jpg",
];

const OurPartners = () => {
	const settings = {
		dots: false,
		infinite: true,
		speed: 500,
		autoplay: true,
		autoplaySpeed: 2000,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1024, // tablet
				settings: {
					slidesToShow: 3,
				},
			},
			{
				breakpoint: 640, // mobile
				settings: {
					slidesToShow: 1,
				},
			},
		],
	};

	return (
		<section className="py-16 border-b-2  border-orange-500/40 w-full overflow-hidden">
			<motion.h2
				initial={{ opacity: 0, y: -20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.5 }}
				className="text-3xl sm:text-4xl font-bold text-center  mb-12 relative">
				Our Partners
				<div className="h-1 w-24 bg-orange-500 mx-auto mt-2" />
			</motion.h2>
			<Slider {...settings}>
				{logos.map((logo, index) => (
					<div key={index} className="px-4">
						<Image
							src={logo}
							alt={`Partner logo ${index + 1}`}
							width={120}
							height={60}
							className="mx-auto object-contain rounded-2xl"
						/>
					</div>
				))}
			</Slider>
		</section>
	);
};

export default OurPartners;
