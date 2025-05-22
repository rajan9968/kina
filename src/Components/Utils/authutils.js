export const getToken = () => {
    return localStorage.getItem('token');
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

