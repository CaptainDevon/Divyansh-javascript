import express from 'express';
import { getAllUsers,getUserById,createUser,deleteUserById,updateUserById } from '../controllers/userControllers.js';
const router=express.Router();


router.get('/',getAllUsers);

router.get('/:id',getUserById);

router.post('/',createUser);

router.delete('/:id/',deleteUserById);

router.patch('/:id',updateUserById);



export default router;