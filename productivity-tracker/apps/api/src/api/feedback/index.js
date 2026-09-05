import express from "express";
import { addFeedback } from "../../controllers/index.js";
import { validate } from "../../middleware/index.js";

const router=express.Router();


router.post("/",validate(["name","email","rating"]),addFeedback);
export default router;