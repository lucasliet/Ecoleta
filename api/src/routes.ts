import express from 'express';

const routes = express.Router();

routes.get('/', (request, response) => {
    response.json(['funcionou']);
});

export default routes;