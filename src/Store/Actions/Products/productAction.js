// import axios from "axios"
import axiosInstance from "../../../Api/Axios"
import * as productActionTypes from "../Products/productTypes"



export const getProduct = () => {
    return async(dispatch) => {
        try {
            dispatch({
                type: productActionTypes.GET_PRODUCT_START
            })
            const response = await axiosInstance.get('/products');
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
