import express from 'express';
import { getUsers,getUserById,addUser,deleteUser,updateUser } from '../controllers/usersControllers.js';

const router=express.Router();




router.get('/',getUsers);
router.get('/:id',getUserById);

router.post('/',addUser);

router.delete('/:id',deleteUser);

router.patch('/:id',updateUser);



export default router;