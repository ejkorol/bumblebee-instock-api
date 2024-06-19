import initKnex from "knex";
import configure from "../knexfile.js";
const knex = initKnex(configure);

// Find a warehouse by id
export const findOne = async (id) => {
  try {
    const one = await knex("warehouses").where({ id: id }).first();
    if (!one) {
      throw new Error("Warehouse not found");
    }
    return one;
  } catch (error) {
    throw new Error(error);
  }
};

// Find a warehouse and its inventory by id
export const getWarehouseInventory = async (id) => {
  try {
    const warehouseId = id;
    const warehouse = await knex("warehouses")
      .where({ id: warehouseId })
      .first();
    if (!warehouse) {
      throw new Error("Warehouse not found");
    }
    const inventories = await knex("inventories").where({
      warehouse_id: warehouseId,
    });
    const result = {
      ...warehouse,
      inventories: inventories,
    };
    return result;
  } catch (error) {
    throw new Error(error);
  }
};

//Get all warehouses
export const getWarehouses = async () => {
  try {
    const warehouses = await knex.select("*").from("warehouses");
    if (!warehouses) {
      throw new Error("Warehouses not found");
    }
    return warehouses;
  } catch (error) {
    throw new Error(error);
  }
};

//Create a warehouse
export const postWarehouse = async (warehouse) => {
  try {
    const warehouseIds = await knex("warehouses").insert(warehouse);
    const warehouseArray = await knex("warehouses").where({
      id: warehouseIds[0],
    });
    const returnWarehouse = warehouseArray[0];
    return {
      id: returnWarehouse.id,
      warehouse_name: returnWarehouse.warehouse_name,
      address: returnWarehouse.address,
      city: returnWarehouse.city,
      country: returnWarehouse.country,
      contact_name: returnWarehouse.contact_name,
      contact_position: returnWarehouse.contact_position,
      contact_phone: returnWarehouse.contact_phone,
      contact_email: returnWarehouse.contact_email,
    };
  } catch (error) {
    throw new Error(error);
  }
};

//Update a warehouse
export const putWarehouse = async (id, warehouse) => {
  try {
    const phoneRegex = /^\+\d{1,2}\s\(\d{3}\)\s\d{3}-\d{4}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (
      phoneRegex.test(warehouse.contact_phone) &&
      emailRegex.test(warehouse.contact_email)
    ) {
      await knex("warehouses").where({ id: id }).update({
        warehouse_name: warehouse.warehouse_name,
        address: warehouse.address,
        city: warehouse.city,
        country: warehouse.country,
        contact_name: warehouse.contact_name,
        contact_position: warehouse.contact_position,
        contact_phone: warehouse.contact_phone,
        contact_email: warehouse.contact_email,
      });
      const updatedWare = await knex("warehouses").where({ id: id });
      return {
        id: updatedWare[0].id,
        warehouse_name: updatedWare[0].warehouse_name,
        address: updatedWare[0].address,
        city: updatedWare[0].city,
        country: updatedWare[0].country,
        contact_name: updatedWare[0].contact_name,
        contact_position: updatedWare[0].contact_position,
        contact_phone: updatedWare[0].contact_phone,
        contact_email: updatedWare[0].contact_email,
      };
    } else {
      throw new Error("email or phone number is invalid");
    }
  } catch (error) {
    throw new Error(error);
  }
};

//Delete a warehouse
export const deleteWarehouse = async (id) => {
  try {
    const warehouse = await knex("warehouses").where({ id: id }).first();
    if (!warehouse) {
      throw new Error("Warehouse not found");
    }
    await knex("warehouses").where({ id: id }).del();
    return true;
  } catch (error) {
    throw new Error(error);
  }
};

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
