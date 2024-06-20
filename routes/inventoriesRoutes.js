import express from "express";
import {
  getInventory,
  postInventory,
  putInventory
} from "../controllers/inventoryController.js";

const inventoryRouter = express.Router();

inventoryRouter
  .route("/")
  .get(getInventory)
  .post(postInventory)

inventoryRouter
  .route("/:id")
  .put(putInventory);

export default inventoryRouter;
