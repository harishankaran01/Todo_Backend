const express=require("express");
const app=express();
require("dotenv").config();
const dbconnect=require("./config/dbConnection");
dbconnect();
const PORT=process.env.PORT ||5000;
app.use(express.json());
app.use("/",require("./Routes/routes"));
app.use(require("./ErrorHandler/errorHandler"))
app.listen(PORT,()=>{
    console.log(`Server is running in ${PORT}`);
})