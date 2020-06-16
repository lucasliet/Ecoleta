import knex from 'knex';

const connection = knex({
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

export default connection;