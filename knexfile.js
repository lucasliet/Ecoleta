"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _path = require('path'); var _path2 = _interopRequireDefault(_path);

module.exports = {
    client : 'pg',
    connection : process.env.DATABASE_URL,
    migrations : {
        directory : _path2.default.resolve(__dirname, 'dist', 'database', 'migrations'),
    },
    seeds : {
        directory : _path2.default.resolve(__dirname, 'dist', 'database', 'seeds'),
    },
    useNullAsDefault : true,
};