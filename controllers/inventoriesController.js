import initKnex from "knex";
import configure from "../knexfile.js";
const knex = initKnex(configure);

/* GET ALL INVENTORIES */
export const getInventories = async (_req, res) => {
    try {
      const inventories = await knex.select("*").from("inventories");
      res.json(inventories);
      if (!inventories)
        return res.status(404).json({ message: "Inventories not found" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    };
  };