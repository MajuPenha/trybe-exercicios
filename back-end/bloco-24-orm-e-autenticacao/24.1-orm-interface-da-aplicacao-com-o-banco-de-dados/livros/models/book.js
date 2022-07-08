const sequelize = require("sequelize");

const book = (sequelize, DataTypes) => {
  const book = sequelize.define('books', {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    pageQuantity: DataTypes.INTEGER
  });

  return book;
};

module.exports = book;