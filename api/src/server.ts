import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json([
        'Lucas',
        'Billynho',
        'Yuri blabla e a Shirley bla bla'
    ]);
});

app.listen(3333);