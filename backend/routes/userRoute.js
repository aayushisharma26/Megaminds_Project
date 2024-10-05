import express from "express";
import {post_data} from "../controller/userController.js"
const router = (express.Router())

router.post("/register",post_data)


export default router;