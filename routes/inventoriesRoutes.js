import express from "express";
import {
  postInventory,
  getInventory,
  getInventoryDetails
} from "../controllers/inventoryController.js";

const inventoryRouter = express.Router();

inventoryRouter
  .route("/")
  .get(getInventory)
  .post(postInventory)

inventoryRouter
  .route("/:id")
  .get(getInventoryDetails)

export default inventoryRouter;
