import { ADD_TO_CART, GET_CART_ITEMS } from "../Constans/CartConstatns";

const initialState ={
    cart: {}
}

export const CartReducer = (state = initialState, action) =>{

    
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cart : action.payload
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