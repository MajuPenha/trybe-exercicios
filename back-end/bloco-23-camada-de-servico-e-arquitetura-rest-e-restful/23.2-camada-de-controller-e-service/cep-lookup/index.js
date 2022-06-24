const express = require('express');
const bodyParser = require('body-parser');
const cepControllers = require('./controllers/cepControllers');
const PORT = 3000;

const app = express();
app.use(bodyParser.json());

app.get('/ping', cepControllers.getPing)


app.listen(PORT, () => console.log('Online'));