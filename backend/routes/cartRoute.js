import express from 'express';
import { addToCart ,getAllCarts} from '../controller/cartController.js';
import authenticateUser from '../middleware/authenticate.js';

const router = express.Router();

router.post('/add', authenticateUser, addToCart);
router.get('/items', authenticateUser, getAllCarts);

export default router;
