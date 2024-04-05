const mongoose=require("mongoose");

const contactSchema=mongoose.Schema({
    todo:{
        type:String,
        required:[true,"please add the todo"]
    }
},
{
    timestamps:true
})
module.exports=mongoose.model("contact",contactSchema)