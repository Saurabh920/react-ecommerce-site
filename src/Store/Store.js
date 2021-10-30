import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from "./Reducers/authReducer"
import { productReducer } from './Reducers/productReducer'
import { cartReducer } from './Reducers/cartReducer'

export const Store = configureStore({
    reducer: {
        authReducer: authReducer,
        productReducer: productReducer, 
        cartReducer: cartReducer
    }
})