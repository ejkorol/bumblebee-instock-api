import initKnex from "knex";
import config from "../knexfile.js";
import validation from "../middleware/validation.js";
const knex = initKnex(config);

/* CREATE INVENTORY ITEM */
export const postInventory = async (data) => {
  const schema = {
    warehouse_id: true,
    item_name: true,
    description: true,
    category: true,
    status: true,
    quantity: true
  };
	try {
    if (validation(schema, data)) {
		  const inventoryId = await knex("inventories").insert(data);
		  const inventoryArray = await knex("inventories").where({
			  id: inventoryId[0],
		  });
		  const returnInventory = inventoryArray[0];
		  const inventoryItem = {
			  id: returnInventory.id,
			  warehouse_id: returnInventory.warehouse_id,
			  item_name: returnInventory.item_name,
			  description: returnInventory.description,
			  category: returnInventory.category,
			  status: returnInventory.status,
			  quantity: returnInventory.quantity,
		  };
		return inventoryItem;
    } else {
      res.status(400).json({ message: "Missing or invalid properties" });
    };
	} catch (e) {
		throw new Error(e);
	};
};

/* GET INVENTORIES */
export const getInventory = async () => {
	try {
		const inventories = await knex
			.join("warehouses", "warehouses.id", "inventories.warehouse_id")
			.select(
				"inventories.id",
				"warehouses.warehouse_name",
				"inventories.item_name",
				"inventories.description",
				"inventories.category",
				"inventories.status",
				"inventories.quantity"
			)
			.from("inventories");
		if (!inventories)
			return res.status(404).json({ message: "Inventories not found" });
		else {
			return inventories;
		};
	} catch (e) {
		throw new Error(e);
	};
};

/* UPDATE INVENTORY ITEM */
export const putInventory = async (data, id) => {
  const schema = {
    warehouse_id: true,
    item_name: true,
    description: true,
    category: true,
    status: true,
    quantity: true
  };
  try {
    const inventoryItem = await knex("inventories").where({ id: id });

    if (!inventoryItem) {
      res.status(404).json({ message: "Inventories not found" });
    } else if (validation(schema, data)) {
      console.log(validation(schema, data))
      await knex("inventories").where({ id: id }).update({
        warehouse_id: data.warehouse_id,
        item_name: data.item_name,
        description: data.description,
        category: data.category,
        status: data.status,
        quantity: data.quantity
    });
      return {
        id: data.id,
        warehouse_id: data.warehouse_id,
        item_name: data.item_name,
        description: data.description,
        category: data.category,
        status: data.status,
        quantity: data.quantity
      };
    } else {
      res.status(400).json({ message: "Missing or invalid properties" });
    };
  } catch (e) {
    throw new Error(e);
  };
};

/* GET INVENTORY DETAILS BY ID */
export const getInventoryDetails = async (id) => {
	try {
		const one = await knex("inventories").where({ "inventories.id": id })
    .join("warehouses", "warehouses.id", "inventories.warehouse_id")
    .select(
        "inventories.id",
        "warehouses.warehouse_name",
      	"inventories.item_name",
      	"inventories.description",
      	"inventories.category",
      	"inventories.status",
      	"inventories.quantity"
      )
      .first();
		if (!one) {
			throw new Error("Inventory not found");
		}
		return one;
	} catch (error) {
		throw new Error(error);
	}
};
