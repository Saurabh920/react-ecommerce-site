import axios from 'axios'

export const handleAuth = async (username, password) => {
    try {
        const payload = {
            username: username,
            password: password
        }
        const baseURL = process.env.REACT_APP_BASE_URL;
        const response= await axios.post(`${baseURL}/auth/login`, payload)
        if(response.status ===200){
            localStorage.setItem("token", response.data.token)
        }
        return response.data.token;
    }
    catch (error){
        throw error.response.data.message;
    }
}