import express from "express";
import {post_data,login_data} from "../controller/userController.js"
const router = (express.Router())

router.post("/register",post_data)

router.post("/login",login_data)


export default router;