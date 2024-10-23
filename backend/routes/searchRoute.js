import express from "express"

import  {searchPost,searchGet} from '../controller/searchProduct.js'

const router = express.Router()

router.post("/searchpost",searchPost)

router.get("/searchget",searchGet)


export default router;