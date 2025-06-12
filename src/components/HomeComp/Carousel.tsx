"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"https://res.cloudinary.com/degrggosz/image/upload/v1749714943/jaw-crusher_jf8xqi.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749714725/cone_crusher_hwhfqk.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749714725/cone_crusher_hwhfqk.jpg",
	"https://res.cloudinary.com/degrggosz/image/upload/v1749712230/Gemini_Generated_Image_nan52pnan52pnan5_joqnwf.png",
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
		<div className="w-screen h-screen">
			<Slider {...settings}>
				{images.map((src, index) => (
					<div key={index} className="relative">
						<Image
							src={src}
							alt={`Slide ${index + 1}`}
							height={1080}
							width={1920}
							className="h-screen w-screen object-cover rounded-md shadow-md"
							priority={index === 0}
							style={{ filter: "grayscale(0.7)" }}
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
