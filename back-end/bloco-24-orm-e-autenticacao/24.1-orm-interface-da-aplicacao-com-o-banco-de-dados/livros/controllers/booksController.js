const booksServices = require("../services/booksServices")

const booksController = {
  list: async (_req, res) => {
    const result = await booksServices.list();
    res.status(200).json(result);
  },

  findById: async (req, res) => {
    const {id} = req.params;
    const result = await booksServices.findById(id);
    res.status(200).json(result);
  }
};

module.exports = booksController;