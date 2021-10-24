import axios from 'axios'

const handleAuth = async (username, password) => {
    try {
        const payload = {
            username: username,
            password: password,
        }
        const response = await axios.post('https://photoexplorernp.com/api/v1/auth', payload
        )
        return response.data.token;
    }
    catch (error){
        throw error.response.data.message;
    }
}

export default handleAuth;