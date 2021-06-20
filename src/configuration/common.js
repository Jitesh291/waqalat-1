import axios from 'axios';

export const SERVER_URL = 'http://3.108.105.93:5000';

export function getAxiosInstance() {
    const token = localStorage.getItem('auth_token');
    const instance = axios.create({headers: { "Content-Type": "application/json"}});
    instance.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    return instance;
}