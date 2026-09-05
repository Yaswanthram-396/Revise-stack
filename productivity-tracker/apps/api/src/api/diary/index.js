import express from "express";
import {
  getDiaries,
  createDiary,
  getDiaryById,
} from "../../controllers/index.js";
import { isUserValid, validate, validateId } from "../../middleware/index.js";

const router = express.Router();

router.get("/", isUserValid, getDiaries);
router.post("/", validate(["title", "author"]), isUserValid, createDiary);
router.get("/:id", validateId, isUserValid, getDiaryById);

export default router;
