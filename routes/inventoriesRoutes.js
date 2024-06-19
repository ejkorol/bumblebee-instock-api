import express from "express";
const router = express.Router();
import * as inventoryController from "../controllers/inventoriesController.js";

router
    .route("/inventories")
    .get(inventoryController.getInventories);

export default router;