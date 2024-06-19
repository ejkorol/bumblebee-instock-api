import express from "express";
import "dotenv/config";
import cors from "cors";
import warehouseRoutes from "./routes/warehousesRoutes.js";
import inventoryRoutes from "./routes/inventoriesRoutes.js"
const PORT = process.env.PORT || 8080;

const app = express();
app.use(
  cors({
    origin: process.env.CORS_URL,
    methods: "GET,PUT,PATCH,POST,DELETE",
    credentials: true,
  }),
);
app.use(express.json());
app.use("/warehouses", warehouseRoutes);
app.use("/api", inventoryRoutes);

app.listen(PORT, () => console.log(`Listening on ${PORT}`));

