import axios from "axios"
import { setLocalStorage } from "../../Utils/localStorate.Utils"
// import axiosInstance from "../../Api/Axios"
import * as authActionTypes from "./authTypes"


export const loginHandler = (data) => {
    return async(dispatch) => {
        try {
            dispatch({
                type: authActionTypes.LOGIN_START
            })
            const response = await axios.post('https://fakestoreapi.com/auth/login',data);
            if (response.status ===200) {
                dispatch({
                    type: authActionTypes.LOGIN_SUCCESS,
                    token: response.data.token
                })
                setLocalStorage(response.data.token)
            }
        } catch (error) {
            dispatch({
                type: authActionTypes.LOGIN_ERROR
            })
        }
    }
}
