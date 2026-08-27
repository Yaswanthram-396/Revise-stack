import express from "express";
import { getRecipies } from "../../controllers/index.js";

const router = express.Router();

router.get("/", getRecipies);
export default router;
