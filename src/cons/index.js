import axios from 'axios';

export const API_ROUTES = {
    login: '/api/Auth/login',
    getUserInfo: '/api/User/getCurrentUserInfo',
};

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
