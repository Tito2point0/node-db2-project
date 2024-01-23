const db = require("../../data/db-config");
const getAll = () => {
  return db("cars");
  // DO YOUR MAGIC
};

const getById = () => {
  // DO YOUR MAGIC
};

const create = () => {
  // DO YOUR MAGIC
};

module.exports = {
  getAll,
  getById,
  create,
};
