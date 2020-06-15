"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _connection = require('../database/connection'); var _connection2 = _interopRequireDefault(_connection);

class ItemsController{
    async index(request , response ) {
        const items = await _connection2.default.call(void 0, 'items').select('*');
        
        const serializedItems = items.map( item => {
            return {
                id : item.id,
                title : item.title,
                image_url : `https://ecoleta-points-api.herokuapp.com/uploads/${item.image}`
            }
        });
    
        return response.json(serializedItems);
    }
}
exports. default = ItemsController;