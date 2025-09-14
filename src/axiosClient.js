import axios from 'axios';
const API_URL = process.env.REACT_APP_API_URL || process.env.VITE_API_URL;

const client = axios.create({
    baseURL: `${API_URL}/api`,
    timeout: 10000,
});

client.interceptors.request.use(config => {
    const token = localStorage.getItem('jwt');
    if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
});

export default client;
