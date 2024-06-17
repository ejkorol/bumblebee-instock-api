import express from "express";
const router = express.Router();
import * as warehouseController from "../controllers/warehousesController.js";

router.route("/:id").get(warehouseController.findOne);

export default router;
