import express from "express";
import { v4 as uuid } from 'uuid'
let users = [];

export const getUsers = (req, res) => {
    res.json(users)
}

export const getUser = (req, res) => {
    const { id } = req.params

    const user = users.find((user) => user.id === id)
    if (user) {
        res.json(user)
    } else res.status(404).json({ msg: `user with id ${id} doesn't exist` })
}

export const createUser = (req, res) => {
    const user = req.body
    users.push({ id: uuid(), ...user })
    res.json(`users with name ${user.firstName} add to a list`)
}

export const updateUserInfo=(req,res)=>{
    const {id}=req.params
    const {firstName,lastName,age}=req.body

    const user=users.find((user)=>user.id===id)
    if(user){
        user.firstName?firstName:user.firstName
        user.lastName=lastName
        user.age=age
        user.id=uuid()

        res.json(user)
    }else {
        res.json({msg:`user with id:${id} doesn't exist`})
    }
}
export const patchUserInfo=(req,res)=>{
    const {id}=req.params;
    const {firstName,lastName,age}=req.body
    const user=users.find((user)=>user.id===id)
    if(firstName){
        user.firstName=firstName
    }
    if(lastName){
        user.lastName=lastName
    }
    if(age){
        user.age=age
    }
    res.json(user)
}
export const deleteUser=(req,res)=>{

    const {id}=req.params

    const user=users.filter((user)=>user.id!==id)
    res.json(user)
}
