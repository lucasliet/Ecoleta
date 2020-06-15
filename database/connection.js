"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _knex = require('knex'); var _knex2 = _interopRequireDefault(_knex);

const connection = _knex2.default.call(void 0, {
  client: 'pg',
  connection: process.env.DATABASE_URL,
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  },
  useNullAsDefault: true
})

exports. default = connection;