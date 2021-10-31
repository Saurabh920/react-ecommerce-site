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
        case cartActionTypes.REMOVE_CART_SUCCESS:
                // const newAddedCartItems = [...state.addedCartItems.filter((addedCartItems) => addedCartItems.id !== action.payload.id)]
                return {
                // addedCartItems: [...state.addedCartItems.filter((addedCartItems) => addedCartItems !== action.payload)]
                ...state, 
                addedCartItems: state.addedCartItems.filter(item => item.id !== action.payload.id)
            }
            
        case cartActionTypes.GET_CART_ERROR:
            return{
                ...state
            }
        default:
            return state;
    }
}
