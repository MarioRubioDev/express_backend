const {clientesModel} = require('../models')

const getItems = async (req,res)=>{
    const data = await clientesModel.find({})
    res.send({data:data})
}
const getItem =(req,res)=>{}

const createItem = async (req,res)=>{
    const body = req.body
    const data = await clientesModel.create(body)
    res.send({data})
}
const updateItem =(req,res)=>{}
const deleteItem =(req,res)=>{}

module.exports = {getItems, getItem, createItem,updateItem,deleteItem}