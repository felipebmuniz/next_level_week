import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index (request: Request, response: Response) {
        //await aguarda o carregamento
        const items = await knex('items').select('*');
    
        // Serilização é a transformação dos dados para facilitar o entendimento de que, esta solicitando o serviço
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title, 
                image_url: `http://192.168.0.112:3333/uploads/${item.image}`,
            }
        });
    
        return response.json(serializedItems);
    }
}

export default ItemsController;