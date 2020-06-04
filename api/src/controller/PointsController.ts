import {Request, Response} from 'express';
import knex from '../database/connection';

class PointsController {
    async index(request : Request, response : Response){
        const { city, uf, items } = request.query;

        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('points_items', 'points.id', '=', 'points_items.point_id')
            .whereIn('points_items.item_id', parsedItems) //Array é passado como "whereIn" invés de "where"
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct() //como passo 2 parametros em whereIn, evita resultados duplicads
            .select('points.*');

        return response.json(points);
    }

    async show(request : Request, response : Response){
        const {id} = request.params;

        const point = await knex('points').where('id', id).first();

        if (!point){
            return response.status(400).json({message : 'Point not found'});
        }

        const items = await knex('items')
            .join('points_items', 'items.id', '=', 'points_items.item_id')
            .where('points_items.point_id', id)
            .select('items.title');

        return response.json({point, items});
    }

    async create(request : Request, response : Response){
        const {
            name,
            email,
            whatsapp,
            longitude,
            latitude,
            city,
            uf,
            items_ids
        } = request.body;
    
        
        const point = {
            image : 'placeholder.png',
            name,
            email,
            whatsapp,
            longitude,
            latitude,
            city,
            uf
        }
        
        const trx = await knex.transaction(); //só executará as querys se ambas forem bem sucedidas
        
        const insertedIds = await trx('points').insert(point); 
        //knex inser retorna id de tudo que foi inserido, como nesse caso tenho certeza que sempre será
        //inserido só 1, passei a primeira posição do array pra outra variavel
        const point_id = insertedIds[0];

        const pointsItems = items_ids.map((item_id : number) => {
            return {
                point_id,
                item_id
            }
        });
    
        await trx('points_items').insert(pointsItems);
        return response.json({
            id: point_id,
            ...point
        });
    }
}

export default PointsController;