require('dotenv').config();
require('express-async-errors');
const express = require('express');
const error = require('./middlewares/error');
const loginController = require('./controllers/loginController');

const { PORT } = process.env;

const app = express();
app.use(express.json());

app.post('/login', loginController.login);

app.use(error);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
