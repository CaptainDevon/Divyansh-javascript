import express from 'express';
import { getCategory, getInventory, getItemDetails, getSubCategory } from '../controllers/groceryGetControllers.js';
import { addItems } from '../controllers/groceryPostControllers.js';
const router=express.Router();

router.get('/',getInventory);
router.get('/:category',getCategory);
router.get('/:category/:subcategory',getSubCategory);
router.get('/:category/:subcategory/:itemCode',getItemDetails);

router.post('/:category/:subcategory',addItems);


export default router;