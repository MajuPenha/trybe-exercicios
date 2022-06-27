const { getCeps, createCep } = require("../models/cepModels");
const Joi = require('joi');

const cepValidation = async (cep) => {
  const cepFormat = /\d{5}-?\d{3}/;
  if(!cepFormat.test(cep)) return {
    message: { "error": { "code": "invalidData", "message": "CEP inválido" }},
    code: 400,
  }; 
  const ceps = await getCeps(cep);
  console.log(ceps)
  console.log(ceps.length)
  if(!ceps.length) return {
    message: { "error": { "code": "notFound", "message": "CEP não encontrado" }},
    code: 404,
  };
  return {
    message: ceps[0],
    code: 200,
  };
}

const postValidation = async (body) => {
  const schema = Joi.object({
    cep: Joi.string().regex(/\d{5}-\d{3}/).required(),
    logradouro: Joi.string().required(),
    bairro: Joi.string().required(),
    localidade: Joi.string().required(),
    uf: Joi.string().required().length(2)
  }).validate(body)
  if(schema.error) return {
    message: { "error": { "code": "invalidData", "message": schema.error } },
    code: 404,
  };
  
  const [ceps] = await getCeps(body.cep);
  if(ceps.length) return {
    message: { "error": { "code": "alreadyExists", "message": "CEP já existente" }},
    code: 409,
  };

  const postInfo = await createCep(body)
  return {
    message: body,
    code: 201,
  }

}

module.exports =  {
  cepValidation,
  postValidation,
}