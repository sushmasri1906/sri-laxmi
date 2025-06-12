"use client";

import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749719773/vecteezy_landscape-of-mining-truck-and-heavy-equipment-activity_46252113_hlqfmh.jpg",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749720967/conveyors_ayt4pq.webp",
	"https://res.cloudinary.com/dgulr1hgd/image/upload/v1749720605/cone-crushers_a2hzfk.webp",
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
