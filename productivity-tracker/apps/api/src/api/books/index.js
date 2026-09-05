import express from "express";
import {
  getBooks,
  getBookByid,
  createBook,
  updateBookByid,
  deleteBookByid,
  updateStatus,
} from "../../controllers/index.js";
import { isUserValid, validate, validateId } from "../../middleware/index.js";

const router = express.Router();

router.get("/", isUserValid, getBooks);
router.post(
  "/",
  validate(["title", "author", "status"]),
  isUserValid,
  createBook,
);
router.get("/:id", validateId, isUserValid, getBookByid);
router.put(
  "/:id",
  validateId,
  validate(["title", "author", isUserValid, "status"]),
  updateBookByid,
);
router.patch(
  "/:id",
  validateId,
  validate(["status"]),
  isUserValid,
  updateStatus,
);

router.delete("/:id", validateId, isUserValid, deleteBookByid);

export default router;
