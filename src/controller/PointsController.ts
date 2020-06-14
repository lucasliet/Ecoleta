import {Request, Response} from 'express';
import knex from '../database/connection';
import imgur from '../services/ImgurApi';
import FileStream from 'fs';

class PointsController {
    async index(request : Request, response : Response){
        const { city, uf, items_ids } = request.query;

        const parsedItems = String(items_ids)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('points_items', 'points.id', '=', 'points_items.point_id')
            .whereIn('points_items.item_id', parsedItems) //Array é passado como "whereIn" invés de "where"
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct() //como passo 2 parametros em whereIn, evita resultados duplicads
            .select('points.*');

        const serializedPoints = points.map(point => {
            return {
            ...point,
            image_url: `https://ecoleta-points-api.herokuapp.com/uploads/${point.image}`
            }
        });

        return response.json(serializedPoints);
    }

    async show(request : Request, response : Response){
        const {id} = request.params;

        const point = await knex('points').where('id', id).first();

        if (!point){
            return response.status(400).json({message : 'Point not found'});
        }
        const serializedPoint = {
            ...point,
            image_url: `https://ecoleta-points-api.herokuapp.com/uploads/${point.image}`
        };

        const items = await knex('items')
            .join('points_items', 'items.id', '=', 'points_items.item_id')
            .where('points_items.point_id', id)
            .select('items.title');

        return response.json({point: serializedPoint, items});
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
        
        //converte o arquivo para base64 pra ser entendido pela API do imgur
        const file_base64 = FileStream.readFileSync(request.file.path)
            .toString('base64');

        const { data: {link} } = await imgur.Image.upload(
            file_base64,
            { 
                type: 'base64',
                title: request.file.filename,
            }
        );
        const uploadedImageUrl = link;

        const point = {
            image: uploadedImageUrl,
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

            const pointsItems = items_ids
                .split(',') //quebra a string onde houver "," e separa num array
                .map((item_id : string) => Number(item_id.trim())) //remove espaços vazios e converte pra numero num novo array
                .map((item_id : number) => {
                    return {
                        point_id,
                        item_id
                    }
                });
        
            await trx('points_items').insert(pointsItems);
            
        await trx.commit(); //se ambas as querys tiverem ok, executa no banco

        return response.json({
            id: point_id,
            ...point,
            items_ids
        });
    }
}

export default PointsController;
