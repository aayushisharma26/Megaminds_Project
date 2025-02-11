import express from "express"

import  {searchPost,searchGet, getSearchById} from '../controller/searchProduct.js'

const router = express.Router()

router.post("/searchpost",searchPost)

router.get("/searchget",searchGet)

router.get("/searchbyid/:id", getSearchById); 


export default router;