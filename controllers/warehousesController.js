import initKnex from "knex";
import configure from "../knexfile.js";
const knex = initKnex(configure);

export const findOne = async (req, res) => {
  try {
    const warehouse = await knex("warehouses").where({ id: req.params.id });
    return res.status(200).json(warehouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
