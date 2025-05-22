import { useNavigate } from 'react-router-dom';
// const navigate = useNavigate();

export const getToken = (navigate) => {
    try {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate("/admin");
            throw new Error("Token not found in local storage");
        }
        return token;
    } catch (error) {
        console.error("Error getting token:", error);
    }
}

export const getUser = () => {
    return JSON.parse(localStorage.getItem('user'));
}

export const isLoggedIn = () => {
    return localStorage.getItem('isLoggedIn') === 'true';
}

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('isLoggedIn');
}

