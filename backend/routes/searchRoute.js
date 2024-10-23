import express from "express"

import  {searchPost} from '../routes/searchProduct.js'

const router = express.Router()

router.post("/searchpost",searchPost)


export default router;