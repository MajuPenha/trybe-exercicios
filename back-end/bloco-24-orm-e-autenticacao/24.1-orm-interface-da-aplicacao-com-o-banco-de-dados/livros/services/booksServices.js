const {books} = require("../models")
const booksServices = {
 list: async () => {
  const result = await books.findAll();
  return result;
},
};

module.exports = booksServices;