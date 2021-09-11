import ProductPage from "pages/products/ProductPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "pages/home/Home";
import CheckoutPage from "pages/checkout/CheckoutPage";
import Err404 from "pages/404";

const Main = () => {
	return (
		<BrowserRouter>
			<Header />
			<Switch>
				<Route exact path="/">
					<Home />
				</Route>
				<Route path="/products/:productId" exact>
					<ProductPage />
				</Route>
				<Route path="/checkout" exact>
					<CheckoutPage />
				</Route>
				<Route>
					<Err404 />
				</Route>
			</Switch>
			<Footer />
		</BrowserRouter>
	);
};

export default Main;
