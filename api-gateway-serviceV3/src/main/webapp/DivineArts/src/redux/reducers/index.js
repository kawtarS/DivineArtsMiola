import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReducer";
// import { shoppingReducer } from "./shoppingReducer";

const reducers = combineReducers({
	allProducts: productsReducer,
	product: selectedProductsReducer,
	// shop: shoppingReducer,
});
export default reducers;
