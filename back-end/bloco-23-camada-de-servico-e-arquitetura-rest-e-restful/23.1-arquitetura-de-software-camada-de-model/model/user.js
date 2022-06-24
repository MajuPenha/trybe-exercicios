const connection = require('./connection');

const getAll = async () => {
	const [authors] = await connection.execute(
		'SELECT * FROM model_example.users;',
	);
	return authors;
};

const createUser = async (firstName, lastName, email, password) => {
  const [users] = await connection.execute('INSERT INTO users (first_name, last_name, email, password) VALUES (?, ?, ?, ?)',[firstName, lastName, email, password],
  );
  return users;
};

module.exports = {
  createUser,
  getAll,
};