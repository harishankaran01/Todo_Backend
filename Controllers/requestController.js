const express=require("express");
const expressAsyncHandler=require("express-async-handler");
const contact=require("../Models/dbModel");
const getItems=expressAsyncHandler(async(req,res)=>{
    let contact1= await contact.find({},{createdAt:0, updatedAt:0, __v: 0});
    res.statusCode=200;
    res.json(contact1);

})
const postItem=expressAsyncHandler(async(req,res)=>{
    let { item } = req.body;
    if (!item) {
        res.statusCode = 404;
        throw new Error("No data Found")
    }
    contact.create({
        todo: item
    })
    res.statusCode=201
    res.json({
        message:"Todo Added"
    })
})
const deleteItem=expressAsyncHandler(async(req,res)=>{
    let item= req.params.id;
    if (!item) {
        res.statusCode = 404;
        throw new Error("No data Found")
    }
    let contact1=await contact.findByIdAndDelete(item)
    console.log(contact1);
    res.statusCode=200
    res.send(contact1)

})
 module.exports={
    getItems,
    postItem,
    deleteItem
 }
