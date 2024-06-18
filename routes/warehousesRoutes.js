import express from "express";
const router = express.Router();
import * as warehouseController from "../controllers/warehousesController.js";

router
	.route("/:id")
	.get(warehouseController.findOne)
	.put(warehouseController.putWarehouse);
  .delete(warehouseController.deleteWarehouse);

router
  .route("/")
  .get(warehouseController.getWarehouses)
  .post(warehouseController.postWarehouse);

export default router;
