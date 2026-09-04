import express from "express";
import {
  getBooks,
  getBookByid,
  createBook,
  updateBookByid,
  deleteBookByid,
  updateStatus,
} from "../../controllers/index.js";
import { validate, validateId } from "../../middleware/index.js";

const router = express.Router();

router.get("/", getBooks);
router.post("/", validate(["title", "author", "status"]), createBook);
router.get("/:id", validateId, getBookByid);
router.put(
  "/:id",
  validateId,
  validate(["title", "author", "status"]),
  updateBookByid,
);
router.patch("/:id", validateId, validate(["status"]), updateStatus);

router.delete("/:id", validateId, deleteBookByid);

export default router;
