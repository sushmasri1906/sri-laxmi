import React from "react";
import Carousel from "./Carousel";
import Solution from "./Solution";
import HomeAbout from "./HomeAbout";
import Specialities from "./Specialities";
import Products from "../products/Our-Products";

function Home() {
	return (
		<div>
			<Carousel />
			<HomeAbout />
			<Solution />

			<Specialities />
			<Products />
		</div>
	);
}

export default Home;
