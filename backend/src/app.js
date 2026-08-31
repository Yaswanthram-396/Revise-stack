import express from "express";
import root from "./api/index.js";
import { Router } from "express";
import cors from 'cors'

const router = Router();

const app = express();

app.use(cors('*'))

app.use(express.json());

app.use("/api", root);

export default app;
