import express from "express";
const inventoryRouter = express.Router();
import {
  getInventoryById
} from "../controllers/inventoryController.js";


inventoryRouter
  .route("/:id/inventories")
  .get(getInventoryById);

export default inventoryRouter;
