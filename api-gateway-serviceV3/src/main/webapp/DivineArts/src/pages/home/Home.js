import ProductListing from "pages/products/components/ProductListing";
import React from "react";
import Categories from "./components/Categories";
import Content from "./components/Content";
import CTA from "./components/CTA";
import Slider from "./components/Slider";

const Home = () => {
	return (
		<>
			<Slider />
			<Categories />
			<Content />
			<CTA />
			<ProductListing />
		</>
	);
};

export default Home;
