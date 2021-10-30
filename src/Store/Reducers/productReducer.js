import * as productActionTypes from "../Actions/Products/productTypes"

const initState = {
    loading: false,
    product: []
}
export const productReducer = (state = initState, action) => {
    switch (action.type) {
        case productActionTypes.GET_PRODUCT_START:
            return{
                ...state,
                loading: true
            }
        case productActionTypes.GET_PRODUCT_SUCCESS:
            return{
                ...state,
                loading: false,
                product: [...action.payload]
            }
        case productActionTypes.GET_PRODUCT_ERROR:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
