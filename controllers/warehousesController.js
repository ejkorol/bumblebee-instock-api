import {
  findOne as findOneService,
  getWarehouseInventory as getWarehouseInventoryService,
  getWarehouses as getWarehousesService,
  postWarehouse as postWarehouseService,
  putWarehouse as putWarehouseService,
  deleteWarehouse as deleteWarehouseService,
  getInventoryById as getInventoryByIdService,
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
export const getWarehouses = async (req, res) => {
  try {
    let warehouses = await getWarehousesService();
    const sortBy = req.query.sort_by;
    const order = req.query.order_by;

    if (sortBy) {
      warehouses = warehouses.sort((a, b) => {
        if (sortBy === "name") {
          return order === "desc"
            ? b.warehouse_name.localeCompare(a.warehouse_name)
            : a.warehouse_name.localeCompare(b.warehouse_name);
        } else if (sortBy === "address") {
          return order === "desc"
            ? b.address.localeCompare(a.address)
            : a.address.localeCompare(b.address);
        } else if (sortBy === "contact") {
          return order === "desc"
            ? b.contact_name.localeCompare(a.contact_name)
            : a.contact_name.localeCompare(b.contact_name);
        } else if (sortBy === "number") {
          return order === "desc"
            ? b.contact_number - a.contact_number
            : a.contact_number - b.contact_number;
        } else {
          return 0;
        }
      });
    }

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
  }
};
