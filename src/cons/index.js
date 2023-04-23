import axios from 'axios';

export const API_ROUTES = {
    // USER
    login: '/api/Auth/login',
    getUserInfo: '/api/User/getCurrentUserInfo',
    changePassword: '/api/User/ChangePassword',
    updateProfile: '/api/User',
    resetPassword: '/api/User/ResetPassword',
    getListUser: '/api/User',
    deleteUser: '/api/User',
    addUser: '/api/User',

    // SUBJECT
    getSubjects: '/api/Subject',
    getSubject: '/api/Subject/GetById',
    createSubject: '/api/Subject',
    deleteSubject: '/api/Subject',
};

export const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});
