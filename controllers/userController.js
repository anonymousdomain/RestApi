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