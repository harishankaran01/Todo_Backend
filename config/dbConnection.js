const express=require("express");
const mongoose=require("mongoose");
const connectdb=async()=>{
    try{
        const connectdb=await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("DataBase connected",connectdb.connection.name);
    }
    catch(err){
        console.log(err);
        process.exit(1);
    }
}
module.exports=connectdb