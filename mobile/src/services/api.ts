import axios from 'axios';

const url = (process.env.NODE_ENV === 'development' ? 'http://localhost:3333/' : 'https://ecoleta-points-api.herokuapp.com/')

const api = axios.create({
    baseURL: url
});
export default api;
