import knex from 'knex';

const connection = knex({
    client : 'PostgreSQL',
    connection: {
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD
      },
      pool: {
        min: 2,
        max: 10
      },
      useNullAsDefault: true
    })

export default connection;