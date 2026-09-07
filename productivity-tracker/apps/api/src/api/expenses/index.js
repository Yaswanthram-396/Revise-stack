import express from "express";
import {
  createExpense,
  deleteExpense,
  getExpenses,
  updateExpense,
} from "../../controllers/index.js";
import { isUserValid, validate, validateId } from "../../middleware/index.js";

const router = express.Router();

router.use(isUserValid);
router.get("/", getExpenses);
router.post(
  "/",
  validate(["title", "amount", "category", "date"]),
  createExpense,
);
router.put(
  "/:id",
  validateId,
  validate(["title", "amount", "category", "date"]),
  updateExpense,
);
router.delete("/:id", validateId, deleteExpense);

export default router;
