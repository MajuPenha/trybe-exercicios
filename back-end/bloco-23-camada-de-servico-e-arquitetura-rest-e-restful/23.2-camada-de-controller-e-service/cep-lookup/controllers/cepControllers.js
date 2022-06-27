const cepServices = require('../services/cepServices');

const getPing = (_req, res) => {
  res.status(200).json({ "message": "pong!"})
}

const postCep = async (req, res) => {
  const cepInfo = await cepServices.postValidation(req.body);
  res.status(cepInfo.code).json(cepInfo.message)
}

const getCep = async (req, res) => {
  const { cep } = req.params;
  const cepInfo = await cepServices.cepValidation(cep);
  return res.status(cepInfo.code).json(cepInfo.message)
}

module.exports = {
  getPing,
  getCep,
  postCep,
}