import express from "express";
const router = express.Router();
import * as warehouseController from "../controllers/warehousesController.js";

router.route("/:id").get(warehouseController.findOne);
router.route("/").post(warehouseController.postWarehouse);
export default router;
