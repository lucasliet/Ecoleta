import express from 'express';
import knex from './database/connection';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');
    
    const serializedItems = items.map( item => {
        return {
            title : item.title,
            image_url : `http://localhost:3333/uploads/${item.image}`
        }
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
    const {
        name, email, whatsapp,
        longitude, latitude,
        city, uf
    } = request.body;

    await knex('points').insert({
        image : 'placeholder.png',
        name, email, whatsapp,
        longitude, latitude,
        city, uf
    });
    return response.json({success:true,name,email,whatsapp,longitude,latitude,city,uf});
});

export default routes;