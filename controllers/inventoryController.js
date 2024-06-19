import {
  postInventory as postInventoryService
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
