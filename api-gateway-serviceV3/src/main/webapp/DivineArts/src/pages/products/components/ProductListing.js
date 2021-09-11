import ProductCard from "./ProductCard";
import React, { useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setProducts } from "redux/actions/productsActions";

const ProductListing = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	const fetchProducts = async () => {
		const response = await axios
			.get("http://localhost:8000/products")
			.catch((err) => {
				console.log("Err", err);
			});
		dispatch(setProducts(response.data));
	};

	useEffect(() => {
		fetchProducts();
	}, []);
	console.log("Products :", products);

	return <ProductCard />;
};

export default ProductListing;
