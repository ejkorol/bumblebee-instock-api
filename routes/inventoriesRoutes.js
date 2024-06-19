import express from "express";

import {
  getInventoryById
} from "../controllers/inventoryController.js";

const inventoryRouter = express.Router();

inventoryRouter
  .route("/:id/inventories")
  .get(getInventoryById);

export default inventoryRouter;
