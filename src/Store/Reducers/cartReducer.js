import * as cartActionTypes from "../Actions/CartProducts/cartTypes"

const initState = {
    loading: false,
    // cartItems: [],
    addedCartItems: [],
    image: "",
    button: []
}
export const cartReducer = (state = initState, action) => {
    switch (action.type) {
        // case cartActionTypes.GET_CART_START:
        //     return{
        //         ...state,
        //         loading: true
        //     }
        // case cartActionTypes.GET_CART_SUCCESS:
        //     return{
        //         ...state,
        //         loading: false,
        //         cartItems: [...action.payload]
        //     }
        case cartActionTypes.ADD_CART_SUCCESS:
                return {
                ...state,
                addedCartItems: [...action.payload]
            }
        case cartActionTypes.REMOVE_CART_SUCCESS:
                return {
                ...state,
                addedCartItems: state.addedCartItems.filter(addedCartItems => addedCartItems !== action.payload)
            }
        case cartActionTypes.GET_IMAGE_SUCCESS:
                return{
                ...state,
                image: action.payload
            }    
        case cartActionTypes.SET_BUTTON_SUCCESS:
                return{
                ...state,
                button: action.payload
            } 
        // case cartActionTypes.GET_CART_ERROR:
        //     return{
        //         ...state
        //     }
        default:
            return state;
    }
}
