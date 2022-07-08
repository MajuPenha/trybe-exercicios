const express = require('express');
const booksController = require('./controllers/booksController');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/books', booksController.list)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));