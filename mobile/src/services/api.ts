import axios from 'axios';

 const api = axios.create({
    //baseURL: 'http://cafezinho.sytes.net:3333'
    baseURL: 'https://ecoleta-points-api.herokuapp.com/'
});
export default api;
