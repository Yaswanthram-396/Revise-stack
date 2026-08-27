import express from "express";
import root from "./api/index.js";
import { Router } from "express";
const router = Router();

const app = express();

app.use(express.json());

app.use("/api", root);

export default app;
