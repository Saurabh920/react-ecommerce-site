import {configureStore} from '@reduxjs/toolkit'
import { authReducer } from "./Reducers/authReducer"
import { productReducer } from './Reducers/productReducer'

export const Store = configureStore({
    reducer: {
        authReducer: authReducer,
        productReducer: productReducer
    }
})