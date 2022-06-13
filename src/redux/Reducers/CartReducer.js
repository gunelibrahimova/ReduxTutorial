import { ADD_TO_CART, GET_CART_ITEMS } from "../Constans/CartConstatns";



export const CartReducer = (state = {cartItems:[]}, action) =>{

    
    switch (action.type) {
        case ADD_TO_CART:
            let item = action.payload;
            return{
                ...state,
                cartItems:[...state.cartItems,item]
            }

            case GET_CART_ITEMS:
                return{
                    ...state,
                    cart:action.payload
                }
    
        default:
            return state
    }
}