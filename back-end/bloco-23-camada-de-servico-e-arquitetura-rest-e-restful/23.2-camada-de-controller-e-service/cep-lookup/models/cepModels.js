const connection = require('./connection');



const getCeps = async (cep) => {
  const newCep = cep.replace('-','')
  const ceps = await connection.execute('SELECT * FROM ceps WHERE cep = ?',[newCep])
  return ceps[0];
}

const createCep = async (body) => {
  const newCep = body.cep.replace('-','')
  const ceps = await connection.execute('INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)',[newCep, body.logradouro, body.bairro, body.localidade, body.uf],
  );
}

module.exports = {
  getCeps,
  createCep,
}