import React from "react";
import Carousel from "./Carousel";
import Solution from "./Solution";
import Products from "./Products";
import HomeAbout from "./HomeAbout";
function Home() {
	return (
		<div>
			<Carousel />
			<Solution />
			<HomeAbout />
			<Products />
		</div>
	);
}

export default Home;
