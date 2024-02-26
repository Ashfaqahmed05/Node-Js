import express from "express";

const Router = express.Router()

const data = ['checking']

Router.get('/', (req, res)=>{
    res.send({message: 'user mil gya', data})
})

export default Router