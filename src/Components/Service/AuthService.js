import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
// register user
export const register = async (data) => {
    try {
        const response = await axios.post(API_URL + 'user/register', data, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });

        return response.data;

    } catch (error) {
        console.log("Error in AuthService:", error);
        throw error;
    }
}

// login user

export const login = async (data) => {
    try {
        const response = await axios.post(API_URL + 'user/login', data, {
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
            },
        });

        return response.data;

    } catch (error) {
        console.log("Error in AuthService:", error);
        throw error;
    }
}
