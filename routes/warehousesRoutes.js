import express from "express";
const router = express.Router();
import * as warehouseController from "../controllers/warehousesController.js";

// router for find one, put and delete controllers
router
  .route("/:id")
  .get(warehouseController.findOne)
  .put(warehouseController.putWarehouse)
  .delete(warehouseController.deleteWarehouse);

// router for getWarehouseInventory controller
router.route("/details/:id").get(warehouseController.getWarehouseInventory);

//router for getWarehouses and postWarehouse controllers
router
  .route("/")
  .get(warehouseController.getWarehouses)
  .post(warehouseController.postWarehouse);

export default router;
