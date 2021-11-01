import * as cartActionTypes from "./cartTypes"
// import axiosInstance from "../../../Api/Axios"


// export const getCart = () => {
//     return async(dispatch) => {
//         try {
//             dispatch({
//                 type: cartActionTypes.GET_CART_START
//             })
//             const response = await axiosInstance.get('/carts');
//             if (response.status === 200) {
//                 dispatch({
//                     type: cartActionTypes.GET_CART_SUCCESS,
//                     payload: response.data
//                 })
//             }
//         } catch (error) {
//             dispatch({
//                 type: cartActionTypes.GET_CART_ERROR
//             })
//         }
//     }
// }


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

export const removeCart = (addedCartItems) => {
    return async(dispatch) => {
        try {
            dispatch({
                type: cartActionTypes.REMOVE_CART_SUCCESS,
                payload: addedCartItems
            })
        } catch (error) {
            dispatch({
                type: cartActionTypes.REMOVE_CART_ERROR
            })
        }
    }
}

export const getImage = (product) => {
    return async(dispatch) => {
        try {
            dispatch({
                type: cartActionTypes.GET_IMAGE_SUCCESS,
                payload: product
            })
        } catch (error) {
            dispatch({
                type: cartActionTypes.GET_IMAGE_ERROR
            })
        }
    }
}

export const setButton = (id) => {
    return async(dispatch) => {
        try {
            dispatch({
                type: cartActionTypes.SET_BUTTON_SUCCESS,
                payload: id
            })
        } catch (error) {
            dispatch({
                type: cartActionTypes.SET_BUTTON_ERROR
            })
        }
    }
}

