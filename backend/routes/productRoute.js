import express from "express";
import { product_post, get_product,getBYId } from "../controller/productController.js";

const router = express.Router();

router.post("/productPost", product_post); 

router.get("/productGet", get_product); 


router.get("/getBYId/:id",getBYId)

export default router;
