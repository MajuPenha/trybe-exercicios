const express = require('express');
require('express-async-errors');
const booksController = require('./controllers/booksController');
const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.json());

app.get('/books', booksController.list);
app.get('/books/:id', booksController.findById);

app.use((err, _req, res, _next) => {
  const {name, message} = err;
  switch(name) {
    case 'NotFoundError': res.status(404).json({message});
      break;
    default: res.status(404).json({message});
      break;
  }

});

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));