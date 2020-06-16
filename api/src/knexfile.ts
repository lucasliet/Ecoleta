import path from 'path';

module.exports = {
    client : 'pg',
    connection : process.env.DATABASE_URL,
    migrations : {
        directory : path.resolve(__dirname, 'dist', 'database', 'migrations'),
    },
    seeds : {
        directory : path.resolve(__dirname, 'dist', 'database', 'seeds'),
    },
    useNullAsDefault : true,
};