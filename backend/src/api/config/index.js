import express from "express";
import { validate } from "../../middleware/index.js";
import { loginUser, registerUser } from "../../controllers/index.js";

const router=express.Router();



router.post("/register",validate(["name","email","password"]),registerUser);
router.post("/login",validate(["email","password"]),loginUser);

export default router;