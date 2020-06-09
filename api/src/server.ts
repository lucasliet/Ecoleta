import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from  './routes';
import { errors } from 'celebrate';

const app = express();

app.use(cors()); //determina que URL acesse nossa api, sem parametro aceita todas
app.use(express.json()); //Diz ao express que a request body será do formato JSON
app.use(routes);

//Atuar como CDN
app.use(
    '/uploads',
     express.static(
        path.resolve(__dirname, '..', 'uploads')
    ),
);

app.use(errors());

const port = process.env.PORT || 3333;

app.listen(port, () => console.log(`Server running a port ${port}`));