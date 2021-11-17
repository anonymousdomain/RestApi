import express from "express";
import { getUsers,getUser,createUser,updateUserInfo,deleteUser,patchUserInfo} from "../controllers/userController.js";
const router=express.Router();

router.get('/',getUsers)

router.get('/:id',getUser)

router.post('',createUser)

router.put('/:id',updateUserInfo)

router.patch('/:id',patchUserInfo)

router.delete('/:id',deleteUser)

export default router;