import {
  getOne,
  getWarehouseInven,
  getAll,
  createOne,
  updateOne,
  deleteOne,
} from "../services/warehouseKnex.js";

/* FIND A WAREHOUSE */
export const findOne = async (req, res) => {
  try {
    const warehouse = await getOne(req.params.id);

    return res.status(200).json(warehouse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET WAREHOUSE + ITS INVENTORY */
export const getWarehouseInventory = async (req, res) => {
  try {
    const result = await getWarehouseInven(req.params.id);

    return res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* GET ALL WAREHOUSES */
export const getWarehouses = async (_req, res) => {
  try {
    const warehouses = await getAll();
    res.json(warehouses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* CREATE A WAREHOUSE */
export const postWarehouse = async (req, res) => {
  try {
    const result = await createOne(req.body);
    return res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

/* UPDATE A WAREHOUSE */
export const putWarehouse = async (req, res) => {
  try {
    const result = await updateOne(req.params.id, req.body);
    return res.status(201).json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

/* DELETE A WAREHOUSE */
export const deleteWarehouse = async (req, res) => {
  try {
    await deleteOne(req.params.id);
    return res.status(204).json();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
