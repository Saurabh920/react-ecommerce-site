import * as authActionTypes from "../Actions/authTypes"

const initState = {
    token: "",
    loading: false
}
export const authReducer = (state= initState, action) => {
    switch (action.type) {
        case authActionTypes.LOGIN_START:
            return{
                ...state,
                loading: true
            }
        case authActionTypes.LOGIN_SUCCESS:
            return{
                ...state,
                token: action.token,
                loading: false
            }
        case authActionTypes.LOGIN_ERROR:
            return{
                ...state,
                loading: false
            }
        default:
            return state;
    }
}
