import axios from "axios"
import * as productActionTypes from "../Products/productTypes"


export const getProduct = () => {
    return async(dispatch) => {
        try {
            dispatch({
                type: productActionTypes.GET_PRODUCT_START
            })
            const response = await axios.get('https://fakestoreapi.com/products');
            if (response.status ===200) {
                dispatch({
                    type: productActionTypes.GET_PRODUCT_SUCCESS,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: productActionTypes.GET_PRODUCT_ERROR
            })
        }
    }
}
