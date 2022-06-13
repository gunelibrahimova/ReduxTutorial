import { BASE_URL } from "../../api/Config";
import { ADD_TO_CART,GET_CART_ITEMS  } from "../Constans/CartConstatns"


export const addToCartAction = (id) =>async (dispach, getState) =>{


    const data = await (await fetch(`${BASE_URL}Product/getbyid/${id}`)).json()

    const product ={
        id:data.message.id,
        name: data.message.name,
        price:data.message.price,
        img:data.message.coverPhoto
    }

    dispach({
        type: ADD_TO_CART,
        payload: product
    })

     localStorage.setItem("cartItems",JSON.stringify(getState().cart.cartItems));
        
}


export const getCartItems = () => async(dispach, getState) =>{
    var data = JSON.parse(localStorage.getItem("cart")) 

    console.log(data);
    dispach({
        type: GET_CART_ITEMS,
        payload:data
    })
}