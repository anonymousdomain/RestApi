import express from "express";
import { getUsers,getUser,createUser,updateUserInfo,deleteUser,patchUserInfo} from "../controllers/userController.js";
const router=express.Router();

router.get('/users',getUsers)

router.get('/users/:id',getUser)

router.post('/users',createUser)

router.put('users/:id',updateUserInfo)

router.patch('/users/:id',patchUserInfo)

router.delete('/users/:id',deleteUser)

export default router;