import express from "express";
import {product_post} from "../controller/productController.js"
const router = (express.Router())

router.post("/productPost",product_post)

// router.get("/productGet",get_product)




export default router;