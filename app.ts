import express, { Express } from "express";
import dotenv from "dotenv";
import itemRouter from "./modules/items/item.router";
const cors = require("cors");

dotenv.config();

const app: Express = express();
app.use(express.json());
app.use(cors());
app.use("/item", itemRouter);

export default app;
