import express from 'express';
import { getAllCars } from '../controllers/entryControllers.js';
const router=express.Router();

router.get('/',getAllCars);

export default router;