import knex from 'knex';
import path from 'path';

const knexConfig = (process.env.NODE_ENV === 'development'
  ? {
    client: 'sqlite3',
    connection: {
      filename: path.resolve(__dirname, 'database.sqlite')
    },
    useNullAsDefault: true,
  }
  : {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    },
    useNullAsDefault: true
  }
)


const connection = knex(knexConfig);

export default connection;