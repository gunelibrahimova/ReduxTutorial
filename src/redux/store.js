import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { addToCartReducer } from "./Reducers/CartReducer";
import { getProductsReducer } from "./Reducers/ProductsReducer";



const reducer = combineReducers({
    products : getProductsReducer,
    cart: addToCartReducer
})


const initialState ={

}

const middleware = [thunk]

const store = createStore (
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;
