import { Router } from 'express';
import { listProducts, seedProducts } from '../controllers/product.controller';

const router = Router();
router.get('/', listProducts);
router.post('/seed', seedProducts);

export default router;
