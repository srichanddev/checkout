import { Router } from 'express';
import { addToCart, listCartItems,getCartSummary,clearCart } from '../controllers/cart.controller';


const router = Router();
router.post('/add', addToCart);
router.get('/', listCartItems);
router.get('/summary', getCartSummary);
router.delete('/clear', clearCart);
export default router;
