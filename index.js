import express from "express";
import "dotenv/config";
import cors from "cors";

/* ROUTES */
import warehouseRoutes from "./routes/warehousesRoutes.js";
import inventoryRoutes from "./routes/inventoriesRoutes.js";

/* CONFIG */
const PORT = process.env.PORT || 8080;
const app = express();

/* MIDDLEWARE */
app.use(
  cors({
    origin: process.env.CORS_URL,
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
  }),
);
app.use(express.json());

/* ROUTES */
app.use("/api/warehouses", warehouseRoutes);
app.use("/api/inventories", inventoryRoutes);

app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`)
});
