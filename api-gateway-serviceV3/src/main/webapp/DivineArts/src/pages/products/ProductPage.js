import React, { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
	selectedProduct,
	removeSelectedProduct,
} from "redux/actions/productsActions";
import ProductListing from "./components/ProductListing";

const ProductPage = () => {
	const { productId } = useParams();
	let product = useSelector((state) => state.product);
	const { name, imageSrc, imageAlt, artist, price, detail } = product;
	const dispatch = useDispatch();

	const fetchProductDetail = async (id) => {
		const response = await axios
			.get(`http://localhost:8000/products/${id}`)
			.catch((err) => {
				console.log("Err ", err);
			});

		dispatch(selectedProduct(response.data));
	};

	useEffect(() => {
		if (productId && productId !== "") fetchProductDetail(productId);
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [productId]);

	return (
		<>
			<div className=" py-36 grid grid-cols-1 gap-y-10 sm:grid-cols-1 lg:grid-cols-2 xl:gap-x-8">
				{Object.keys(product).length === 0 ? (
					<div>...Loading</div>
				) : (
					<>
						<div className="mx-auto">
							<img
								src={imageSrc}
								alt={imageAlt}
								className="p-1 border-4 border-black"
							/>
						</div>
						<div className=" max-w-2xl bg-gray-100 p-8 shadow-xl">
							<h3 className="text-5xl font-semibold tracking-tighter">
								{name}
							</h3>
							<p className="pt-2 text-basic text-gray-600 font-semibold">
								Crée en 1800
							</p>
							<p className="text-basic text-gray-600 font-semibold">
								Par {artist}
							</p>
							<p className="max-w-lg py-6 text-lg shadow-2xl p-8 my-4 text-justify mx-auto">
								{detail}
							</p>
							<div className="flex relative mt-8">
								<div className="">
									<p className="uppercase text-gray-600 font-bold">Prix</p>
									<p className="text-5xl text-gray-500 font-bold">{price}</p>
								</div>
								<div className="absolute right-0">
									<Link to="/checkout">
										<button className="px-6 py-2 text-lg bg-gray-900 text-gray-100 rounded shadow-xl font-semibold my-4 hover:shadow-2xl hover:bg-gray-800">
											Achetez
										</button>
									</Link>

									<button className="px-6 py-2 text-lg rounded shadow-lg bg-gray-300 text-gray-700 font-semibold ml-2">
										Ajouter au panier
									</button>
								</div>
							</div>
						</div>
					</>
				)}
			</div>
			<ProductListing />
		</>
	);
};

export default ProductPage;
