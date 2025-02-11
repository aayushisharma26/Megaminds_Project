import express from 'express';
import { addToCart, getAllCarts} from '../controller/cartController.js';
import authenticateUser from '../middleware/authenticate.js';

const router = express.Router();

// Protect the 'addToCart' route with authentication
router.post('/add', authenticateUser, addToCart);

// This route requires the user to be authenticated to fetch the cart
router.get('/items', authenticateUser, getAllCarts);

export default router;
