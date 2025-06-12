import React from "react";
import Carousel from "./Carousel";
import Solution from "./Solution";
import Products from "./Products";
import HomeAbout from "./HomeAbout";
import Specialities from "./Specialities";
import OurPartners from "./OurPartnerts";
function Home() {
	return (
		<div>
			<Carousel />
			<Solution />
			<HomeAbout />
			<Specialities />
			<Products />
			<OurPartners />
		</div>
	);
}

export default Home;
