import * as cartActionTypes from "../Actions/CartProducts/cartTypes"

const initState = {
    loading: false,
    cartItems: [],
    addedCartItems: []
}
export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case cartActionTypes.GET_CART_START:
            return{
                ...state,
                loading: true
            }
        case cartActionTypes.GET_CART_SUCCESS:
            return{
                ...state,
                loading: false,
                cartItems: [...action.payload]
            }
        case cartActionTypes.ADD_CART_SUCCESS:
                return {
                ...state,
                addedCartItems: [...action.payload]
            }
            
        case cartActionTypes.GET_CART_ERROR:
            return{
                ...state
            }
        default:
            return state;
    }
}
