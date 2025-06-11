"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208237/tmbwi6sdvj0cjmmx0zdp.webp",
	"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208312/hero-banner4_sgd6jh.webp",
	"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208340/hero-banner5_psajws.webp",
	"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208370/hero-banner1_mid5af.webp",
	"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208397/hero-banner2_sz8n6j.webp",
	"https://res.cloudinary.com/dip2khkyo/image/upload/v1739208435/hero-banner3_oqmdfk.webp",
];

const Carousel = () => {
	const settings = {
		dots: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnHover: false,
		arrows: false,
	};

	return (
		<div className="w-full">
			<Slider {...settings}>
				{images.map((src, index) => (
					<div
						key={index}
						className="relative w-full h-[300px] sm:h-[600px] md:h-[500px] lg:h-[600px] xl:h-[600px]">
						<Image
							src={src}
							alt={`Slide ${index + 1}`}
							fill
							className="object-cover rounded-md shadow-md"
							priority={index === 0}
						/>
					</div>
				))}
			</Slider>

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
