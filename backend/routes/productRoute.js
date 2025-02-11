import express from "express";
import { product_post, get_product, getBYId } from "../controller/productController.js";

const router = express.Router();

router.post("/products", product_post);

router.get("/products", get_product);

router.get("/products/:id", getBYId);

export default router;
