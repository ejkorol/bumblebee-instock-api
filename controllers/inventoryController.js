import {
  postInventory as postInventoryService,
  getInventory as getInventoryService
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
    res.json(allInventories)
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};