import express from "express";
import {
  postInventory,
  getInventory
} from "../controllers/inventoryController.js";

const inventoryRouter = express.Router();

inventoryRouter
  .route("/")
  .get(getInventory)
  .post(postInventory)

export default inventoryRouter;
