import express from "express";
import {
  getAllJournals,
  getJournalById,
  deleteJournalById,
  createJournal,
  updateJournalById,
} from "../controllers/journalControllers.js";

const router = express.Router();

router.get("/", getAllJournals);
router.get("/:id", getJournalById);
router.post("/", createJournal);
router.delete("/:id", deleteJournalById);
router.patch("/:id", updateJournalById);

export default router;
