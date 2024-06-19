import {
  findOne as findOneService,
  getWarehouseInventory as getWarehouseInventoryService,
  getWarehouses as getWarehousesService,
  postWarehouse as postWarehouseService,
  putWarehouse as putWarehouseService,
  deleteWarehouse as deleteWarehouseService,
  getInventoryById as getInventoryByIdService
} from "../services/warehouseKnex.js";

/* FIND A WAREHOUSE */
export const findOne = async (req, res) => {
  try {
    const warehouse = await findOneService(req.params.id);

    return res.status(200).json(warehouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET WAREHOUSE + ITS INVENTORY */
export const getWarehouseInventory = async (req, res) => {
  try {
    const result = await getWarehouseInventoryService(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET ALL WAREHOUSES */
export const getWarehouses = async (_req, res) => {
  try {
    const warehouses = await getWarehousesService();
    res.json(warehouses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* CREATE A WAREHOUSE */
export const postWarehouse = async (req, res) => {
  try {
    const result = await postWarehouseService(req.body);
    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE A WAREHOUSE */
export const putWarehouse = async (req, res) => {
  try {
    const result = await putWarehouseService(req.params.id, req.body);
    return res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* DELETE A WAREHOUSE */
export const deleteWarehouse = async (req, res) => {
  try {
    await deleteWarehouseService(req.params.id);
    return res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
