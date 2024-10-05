import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";

import dotenv from 'dotenv';
dotenv.config(); 

const  app = express();
const PORT = process.env.PORT||4000
const mongoPassword = process.env.MONGO_PASSWORD

app.use(express.json())
app.use("/user",userRouter);
app.use("/product",productRouter);



const url = `mongodb+srv://aayushisharma1:${mongoPassword}@cluster0.jfztl.mongodb.net/Megaminds`;
mongoose.connect(url)
.then(()=>{
    console.log("Connection")
})
.catch((err)=>{
    console.log("err")
})

app.listen(PORT,function(){
    console.log("Server is runing")
})
