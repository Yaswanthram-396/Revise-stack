import express from "express";
import { isUserValid, validate } from "../../middleware/index.js";
import {
  loginUser,
  registerUser,
  logoutUser,
} from "../../controllers/index.js";

const router = express.Router();

router.post("/register", validate(["name", "email", "password"]), registerUser);
router.post("/login", validate(["email", "password"]), loginUser);
router.get("/me", isUserValid, (req, res) =>
  res.status(200).json({ data: req.user }),
);
router.get("/logout", isUserValid, logoutUser);

export default router;
