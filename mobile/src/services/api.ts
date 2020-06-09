import axios from 'axios';

 const api = axios.create({
    baseURL: 'https://ecoleta-points-api.herokuapp.com/'
});
export default api;
