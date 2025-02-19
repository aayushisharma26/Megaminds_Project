import express from "express";
import mongoose from "mongoose";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import searchRouter from "./routes/searchRoute.js";
import cartRoutes from './routes/cartRoute.js';

import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
const mongoPassword = process.env.MONGO_PASSWORD;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.json({ message: "Hello world from backend" });
});

app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/search", searchRouter);
app.use('/api/cart', cartRoutes);


const url = `mongodb+srv://aayushisharma1:${mongoPassword}@cluster0.jfztl.mongodb.net/Megaminds`;
mongoose.connect(url)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("MongoDB connection error:", err.message);
    });

    

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
