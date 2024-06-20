import initKnex from "knex";
import config from "../knexfile.js";
const knex = initKnex(config);

/* CREATE INVENTORY ITEM */
export const postInventory = async (data) => {
	try {
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
	} catch (e) {
		throw new Error(e);
	}
};

export const getInventory = async () => {
	try {
		const inventories = await knex.select("*").from("inventories");
		if (!inventories)
			return res.status(404).json({ message: "Inventories not found" });
		else {
			return inventories;
		}
	} catch (e) {
		throw new Error(e);
	}
};

export const getInventoryDetails = async (id) => {
	try {
		const inventory = await knex.select("*").from("inventories");
		if (!inventory)
			return res.status(404).json({ message: "Inventories not found" });
		else {
			return inventory;
		}
	} catch (e) {
		throw new Error(e);
	}
};
