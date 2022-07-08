const booksServices = require("../services/booksServices")

const booksController = {
  list: async (_req, res) => {
    result = await booksServices.list();
    res.status(200).json(result);
  },
};

module.exports = booksController;