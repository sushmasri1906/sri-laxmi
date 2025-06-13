"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import Link from "next/link";

const images = [
	"https://res.cloudinary.com/degrggosz/image/upload/v1749805504/5_dxzxxt.png",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749805480/2_ekm1vv.png",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749805474/1_t7xmfx.png",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749805495/4_sfh3lc.png",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749805487/3_kptbzu.png",
];

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 3000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		arrows: false,
	};

	return (
		<div className="w-screen h-[calc(100vh/2)] lg:h-screen relative overflow-hidden">
			<Slider {...settings}>
				{images.map((src, index) => (
					<div key={index} className="relative  h-[calc(100vh/2)] lg:h-full">
						<Image
							src={src}
							alt={`Slide ${index + 1}`}
							height={1080}
							width={1920}
							className=" h-full lg:h-screen w-screen object-cover rounded-md shadow-md invert-10"
							priority={index === 0}
						/>
					</div>
				))}
			</Slider>

			<motion.div
				initial={{ opacity: 0, y: 50 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 1, ease: "easeOut" }}
				viewport={{ once: true }}
				className="absolute top-1/3 lg:top-2/5 left-0 md:left-12 lg:left-24 ml-6 sm:ml-12 p-4 sm:p-8 max-w-xl w-full">
				<h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2">
					SRI LAXMI <span className="text-white">SALES CORPORATION</span>
				</h1>

				<p className="font-medium text-sm sm:text-base md:text-lg text-white mb-4 max-w-md">
					We, Sri Laxmi Sales Corporation traders and manufacturers, Heavy
					Machining and Fabricators for more than 100 above product variants and
					supplies them to more than 150 customers.
				</p>

				<Link
					href="/about"
					className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold text-sm sm:text-base px-5 py-2 rounded-md shadow-md transition duration-300">
					Read More
				</Link>
			</motion.div>
			<style jsx global>{`
				.slick-dots li button:before {
					color: orange !important;
					font-size: 6px;
					opacity: 1 !important;
				}
				.slick-dots li.slick-active button:before {
					color: #ff6600 !important;
				}
			`}</style>
		</div>
	);
};

export default Carousel;
