import {Request, Response} from 'express';
import knex from '../database/connection';

class PointsController {
    async create(request : Request, response : Response){
        const {
            name, email, whatsapp,
            longitude, latitude,
            city, uf,
            items
        } = request.body;
    
        const trx = await knex.transaction(); //só executará as querys se ambas forem bem sucedidas
        
        const point = {
            image : 'placeholder.png',
            name, email, whatsapp,
            longitude, latitude,
            city, uf,
        }
        const insertedIds = await trx('points').insert(point);
    
        const pointsItems = items.map((item_id : Number) => {
            return {
                item_id,
                point_id: insertedIds[0]
            }
        });
    
        await trx('points_items').insert(pointsItems);
        return response.json({
            id: insertedIds[0],
            ...point
        });
    }
}

export default PointsController;