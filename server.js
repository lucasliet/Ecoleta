"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);
var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);
var _celebrate = require('celebrate');

const app = _express2.default.call(void 0, );

app.use(_cors2.default.call(void 0, )); //determina que URL acesse nossa api, sem parametro aceita todas
app.use(_express2.default.json()); //Diz ao express que a request body será do formato JSON
app.use(_routes2.default);

//Atuar como CDN
app.use(
    '/uploads',
     _express2.default.static(
        _path2.default.resolve(__dirname, '..', 'uploads')
    ),
);

app.use(_celebrate.errors.call(void 0, ));

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server running a port ${port}`));