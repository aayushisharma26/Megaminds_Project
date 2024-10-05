import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js"
const  app = express();
const PORT = process.env.PORT||4000
const mongoPassword = process.env.MONGO_PASSWORD
app.use(express.json())

app.use("/user",userRouter);
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
