import express from 'express';
import path from 'path';
import routes from  './routes';

const app = express();

app.use(express.json()); //Diz ao express que a request body será do formato JSON
app.use(routes);

//Atuar como CDN
app.use(
    '/uploads',
     express.static(
        path.resolve(__dirname, '..', 'uploads')
    ),
);

app.listen(3333);