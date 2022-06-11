import { ADD_TO_CART } from "../Constans/CartConstatns";

const initialState ={
    cart: {}
}

export const addToCartReducer = (state = initialState, action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            return{
                ...state,
                cart : action.payload
            }
    
        default:
            return state
    }
}