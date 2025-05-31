import express from "express";
import { displayDetails } from "../controllers/appControllers.js";
const router = express.Router();

router.post("/display", displayDetails);

export default router;
