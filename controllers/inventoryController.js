import {
  postInventory as postInventoryService,
  getInventory as getInventoryService,
  getInventoryDetails as getInventoryDetailsService
} from "../services/inventoryKnex.js";

/* CREATE INVENTORY ITEM */
export const postInventory = async (req, res) => {
  try {
    const data = req.body;
    const result = await postInventoryService(data);
    return res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  };
};

export const getInventory = async (_req, res) => {
  try {
    const allInventories = await getInventoryService();
    res.status(200).json(allInventories)
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

export const getInventoryDetails = async (req, res) => {
  try {
    const inventory = await getInventoryDetailsService(req.params.id);
    res.status(200).json(inventory)
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};