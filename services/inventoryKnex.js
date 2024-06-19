import initKnex from "knex";
import configure from "../knexfile.js";
const knex = initKnex(configure);

/* GET INVENTORY BY ID */
export const getInventoryById = async (id) => {
  try {
    const warehouseId = id;

    const inventory = await knex("inventories")
      .where({ warehouse_id: warehouseId });

    const warehouses = await knex("warehouses")
      .where({ id: id })
      .first();

    if (!warehouses) {
      throw new Error("Warehouse does not exist")
    };
    if (!inventory) {
      throw new Error("Inventories not found")
    };

    return inventory;
  } catch (e) {
    throw new Error(e);
  };
};
