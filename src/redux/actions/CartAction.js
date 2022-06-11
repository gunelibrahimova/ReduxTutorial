import { ADD_TO_CART,GET_CART_ITEMS  } from "../Constans/CartConstatns"


export const addToCartAction = (product) =>async (dispach, getState) =>{

var data = localStorage.setItem("cart",JSON.stringify(product));

    dispach({
        type: ADD_TO_CART,
        payload:data
    })
        
}


export const getCartItems = () => async(dispach, getState) =>{
    var data = localStorage.getItem("cart")

    dispach({
        type: GET_CART_ITEMS,
        payload:data
    })
}