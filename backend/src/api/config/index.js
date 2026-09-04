import express from "express";
import { isUserValid, validate } from "../../middleware/index.js";
import { loginUser, registerUser } from "../../controllers/index.js";

const router = express.Router();

router.post("/register", validate(["name", "email", "password"]), registerUser);
router.post("/login", validate(["email", "password"]), loginUser);
router.get("/me", isUserValid, (req, res) =>
  res.status(200).json({ data: req.user }),
);

export default router;
