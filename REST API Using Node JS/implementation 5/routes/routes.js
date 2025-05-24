import express from 'express';
import { getCategory, getInventory, getItemDetails, getSubCategory } from '../controllers/groceryGetControllers.js';
import { addCategory, addItems, addSubcategory, billing } from '../controllers/groceryPostControllers.js';
import { deleteAllItems, deleteCategory, deleteItem, deleteSubCategory } from '../controllers/groceryDeleteControllers.js';
import { patchCategory, patchItemContent, patchSubcategory } from '../controllers/groceryPatchControllers.js';
const router=express.Router();

router.get('/',getInventory);
router.get('/:category',getCategory);
router.get('/:category/:subcategory',getSubCategory);
router.get('/:category/:subcategory/:itemCode',getItemDetails);

router.post('/:category/new-category',addCategory);
router.post('/:category/:subcategory/new-subcategory',addSubcategory);
router.post('/:category/:subcategory',addItems);
router.post('/billing',billing);

router.delete('/:category',deleteCategory);
router.delete('/:category/:subcategory',deleteSubCategory);
router.delete('/:category/:subcategory/clear',deleteAllItems);
router.delete('/:category/:subcategory/:itemCode',deleteItem);


router.patch('/:category/:updatedCategory',patchCategory);
router.patch('/:category/:subCategory/:updatedSubCategory/update-subcategory',patchSubcategory);
router.patch('/:category/:subcategory/:itemCode',patchItemContent);

export default router;