import express from "express";
import { v4 as uuid } from 'uuid'
let users = [];

export const getUsers = (req, res) => {
    res.json(users)
}

export const getUser = (req, res) => {

    res.json(users)
}

export const createUser = (req, res) => {
   const user=req.body
   users.push(user)
    res.send(`users with name ${user.name} add to a list`)
}