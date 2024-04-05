const express=require("express");
const errorHandler=(err,req,res,next)=>{
   let code=res.statusCode||404;
   res.statusCode=code;
   res.json({
    message:err.message
   })
}
module.exports=errorHandler;