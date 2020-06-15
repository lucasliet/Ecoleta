"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _celebrate = require('celebrate');

var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multer3 = require('./config/multer'); var _multer4 = _interopRequireDefault(_multer3);

var _PointsController = require('./controller/PointsController'); var _PointsController2 = _interopRequireDefault(_PointsController);
var _ItemsController = require('./controller/ItemsController'); var _ItemsController2 = _interopRequireDefault(_ItemsController);

const routes = _express2.default.Router();
const upload = _multer2.default.call(void 0, _multer4.default);

const pointsController = new (0, _PointsController2.default)();
const itemsController = new (0, _ItemsController2.default)();

routes.get('/', (request, response) => {
    return response.json({
      message: 'Ecoleta Server API: https://lucasliet.github.io/Ecoleta'
  
    })
  })
routes.get('/points/:id', pointsController.show);
routes.get('/points', pointsController.index);
routes.get('/items', itemsController.index);

routes.post(
    '/points',
    upload.single('image'),
    _celebrate.celebrate.call(void 0, {
        body: _celebrate.Joi.object().keys({
            name: _celebrate.Joi.string().required(),
            email: _celebrate.Joi.string().required().email(),
            whatsapp: _celebrate.Joi.number().required(),
            latitude: _celebrate.Joi.number().required(),
            longitude: _celebrate.Joi.number().required(),
            city: _celebrate.Joi.string().required(),
            uf: _celebrate.Joi.string().required().max(2),
            items_ids: _celebrate.Joi.string().required(),
        })
    }, {
        abortEarly: false
    }),
    pointsController.create
);

exports. default = routes;
