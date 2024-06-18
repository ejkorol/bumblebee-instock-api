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

export const postWarehouse = async (req, res) => {
  try {
    const warehouseIds = await knex("warehouses").insert(req.body);

    const warehouseArray = await knex("warehouses").where({
      id: warehouseIds[0],
    });
    const returnWarehouse = warehouseArray[0];
    return res.status(201).json({
      id: returnWarehouse.id,
      warehouse_name: returnWarehouse.warehouse_name,
      address: returnWarehouse.address,
      city: returnWarehouse.city,
      country: returnWarehouse.country,
      contact_name: returnWarehouse.contact_name,
      contact_position: returnWarehouse.contact_position,
      contact_phone: returnWarehouse.contact_phone,
      contact_email: returnWarehouse.contact_email,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const putWarehouse = async (req, res) => {
  try {
    
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}