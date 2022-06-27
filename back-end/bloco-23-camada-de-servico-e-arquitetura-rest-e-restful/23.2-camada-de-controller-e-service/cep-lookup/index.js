const express = require('express');
const bodyParser = require('body-parser');
const cepControllers = require('./controllers/cepControllers');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/ping', cepControllers.getPing);

app.get('/cep/:cep', cepControllers.getCep);

app.post('/cep', cepControllers.postCep);


app.listen(PORT, () => console.log('Online'));