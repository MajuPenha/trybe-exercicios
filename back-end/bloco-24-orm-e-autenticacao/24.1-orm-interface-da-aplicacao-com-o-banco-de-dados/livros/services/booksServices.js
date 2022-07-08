const {books} = require("../models")
const booksServices = {
 list: async () => {
  const result = await books.findAll();
  return result;
},

findById: async (id) => {
  const result = await books.findByPk(id)
  if(!result){
    const e = new Error('Book not found');
    e.name = 'NotFoundError';
    throw e;
  };
  return result;
},

};

module.exports = booksServices;