import {
  getInventoryById as getInventoryByIdService
} from "../services/inventoryKnex.js";

/* GET INVENTORY BY ID */
export const getInventoryById = async (req, res) => {
  try {
    const id = req.params.id;
    const inventory = await getInventoryByIdService(id);
    res.status(200).json(inventory);
  } catch (e) {
    res.status(500).json({ message: e.message });
  };
};
