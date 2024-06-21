import express from "express";
import {
  getInventory,
  postInventory,
  putInventory,
  getInventoryDetails,
  deleteInventory
} from "../controllers/inventoryController.js";
import { deleteInventoryItem } from "../services/inventoryKnex.js";

const inventoryRouter = express.Router();

inventoryRouter
  .route("/")
  .get(getInventory)
  .post(postInventory)

inventoryRouter
  .route("/:id")
  .get(getInventoryDetails)
  .put(putInventory)
  .delete(deleteInventory)

export default inventoryRouter;
