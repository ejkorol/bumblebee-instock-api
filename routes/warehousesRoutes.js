import express from "express";
import {
  findOne,
  putWarehouse,
  deleteWarehouse,
  getWarehouseInventory,
  getWarehouses,
  postWarehouse,
  getInventoryById,
} from "../controllers/warehousesController.js";

const router = express.Router();

/* WAREHOUSE BY ID */
router.route("/:id").get(findOne).put(putWarehouse).delete(deleteWarehouse);

/* WAREHOUSE DETAILS BY ID */
router.route("/details/:id").get(getWarehouseInventory);

/* BASE */
router.route("/").get(getWarehouses).post(postWarehouse);

router.route("/:id/inventories").get(getInventoryById);

export default router;
