import express from "express";
import {
  postInventory
} from "../controllers/inventoryController.js";

const inventoryRouter = express.Router();

inventoryRouter
  .route("/")
  .post(postInventory)

export default inventoryRouter;
