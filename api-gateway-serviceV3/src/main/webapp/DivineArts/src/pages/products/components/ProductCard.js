import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const ProductCard = () => {
	const products = useSelector((state) => state.allProducts.products);
	const renderList = products.map((product) => {
		const { id, name, imageSrc, imageAlt, artist, price } = product;
		return (
			<Link to={`/products/${id}`}>
				<div
					key={id}
					className="group relative shadow-2xl overflow-hidden rounded-lg"
				>
					<div className="w-full min-h-80 aspect-w-1 aspect-h-1 overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
						<img
							src={imageSrc}
							alt={imageAlt}
							className="w-full h-full object-center object-cover lg:w-full lg:h-full"
						/>
					</div>
					<div className="mt-4 flex justify-between px-6 pb-3">
						<div>
							<h3 className="text-lg text-gray-700">{name}</h3>
							<p className="mt-1 text-sm text-gray-500">by {artist}</p>
						</div>
						<p className="text-2xl font-semibold text-gray-900">{price}</p>
					</div>
				</div>
			</Link>
		);
	});

	return (
		<div className="bg-white pb-12">
			<div className="max-w-2xl mx-auto py-16 px-4 sm:py-10 sm:px-6 lg:max-w-7xl lg:px-8">
				<h1 className="pt-6 text-center text-5xl font-bold tracking-tight mb-14">
					L'art acheté sur Divine Arts
				</h1>
				<div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
					{renderList}
				</div>
			</div>
		</div>
	);
};

export default ProductCard;
