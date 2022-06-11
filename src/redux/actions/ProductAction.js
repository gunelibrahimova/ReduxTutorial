import { BASE_URL } from "../../api/Config"
import { GET_PRODUCTS } from "../Constans/ProductConstans"




export const GetProductAction = () => async(dispach, getState) =>{
    if(!Object.keys(getState().products.products).length){
        const data = await (await fetch(`${BASE_URL}Product/productlist`)).json()
        dispach({
            type: GET_PRODUCTS,
            payload: data
        })
    }
    

}   