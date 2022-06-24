const express = require('express');
const { createUser, getAll } = require('./model/user');
const bodyParser = require('body-parser')

const app = express();
app.use(bodyParser.json());

app.get('/authors', async (_req, res) => {
	const authors = await getAll();

	res.status(200).json(authors);
});

app.post('/user', async (req, res) => {
  const {firstName, lastName, email, password} = req.body;
  await createUser(firstName, lastName, email, password);
  res.status(201).json({message: 'User created'});
});

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
	console.log(`Ouvindo a porta ${PORT}`);
});