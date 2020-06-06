import axios from 'axios';

const api = axios.create({
    baseURL: 'http://cafezinho.sytes.net:3333'
});
export default api;