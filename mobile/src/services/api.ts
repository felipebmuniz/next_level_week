import axios from 'axios'; //   npm install axios

const api = axios.create({
    baseURL: 'http://192.168.0.112:3333',
});

export default api;