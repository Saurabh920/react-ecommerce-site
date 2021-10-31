import axios from 'axios'
import * as cartActionTypes from "./cartTypes"


export const getCart = () => {
    return async(dispatch) => {
        try {
            dispatch({
                type: cartActionTypes.GET_CART_START
            })
            const response = await axios.get('https://fakestoreapi.com/carts');
            if (response.status === 200) {
                dispatch({
                    type: cartActionTypes.GET_CART_SUCCESS,
                    payload: response.data
                })
            }
        } catch (error) {
            dispatch({
                type: cartActionTypes.GET_CART_ERROR
            })
        }
    }
}


export const addCart = (product) => {
    return async(dispatch) => {
        try {
            dispatch({
                type: cartActionTypes.ADD_CART_SUCCESS,
                payload: product
            })
        } catch (error) {
            dispatch({
                type: cartActionTypes.ADD_CART_ERROR
            })
        }
    }
}

export const removeCart = (product) => {
    return async(dispatch) => {
        try {
            dispatch({
                type: cartActionTypes.REMOVE_CART_SUCCESS,
                payload: product
            })
        } catch (error) {
            dispatch({
                type: cartActionTypes.REMOVE_CART_ERROR
            })
        }
    }
}
