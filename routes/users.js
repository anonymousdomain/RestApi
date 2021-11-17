import express from "express";

const router=express.Router();


router.get('/users',(req,res)=>res.send("hello"))

router.get('/users/:id',getUsers)

router.post('/users',createUser)


router.put('users/:id',updateUserInfo)

router.patch('/users/:id',patchUserInfo)

router.delete('/users/:id',deleteUser)




export default router;