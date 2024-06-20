import {
  postInventory as postInventoryService,
  getInventory as getInventoryService,
  putInventory as putInventoryService
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

/* GET SINGLE INVENTORY ITEM */
export const getInventory = async (_req, res) => {
  try {
    const allInventories = await getInventoryService();
    res.json(allInventories)
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

/* UPDATE INVENTORY ITEM */
export const putInventory = async (req, res) => {
  try {
    const id = req.params.id;
    const data = req.body;
    const result = await putInventoryService(data, id);
    return res.status(201).json(result);
  } catch (e) {
    res.status(500).json({ message: e.message });
  };
};
