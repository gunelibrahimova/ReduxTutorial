import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { CartReducer } from "./Reducers/CartReducer";
import { getProductsReducer } from "./Reducers/ProductsReducer";

const {default: thunk} = require("redux-thunk")



const reducer = combineReducers({
    products : getProductsReducer,
    cart: CartReducer
})

const cartItemFromLocalStorage = localStorage.getItem("cartItems")
? JSON.parse(localStorage.getItem("cartItems")):[]

const initialState ={
    cart:{cartItems:cartItemFromLocalStorage}
}

const middleware = [thunk]

const store = createStore (
    reducer,
    initialState,
    applyMiddleware(...middleware)
)

export default store;
