import { Request, Response } from 'express';
import { CartItem } from '../models/cart.model';
import { Product } from '../models/product.model';
import { calculateCart } from '../services/promotion.service';


// Add item to cart
export const addToCart = async (req: Request, res: Response) => {
  const { productId, quantity } = req.body;
  const item = await CartItem.create({ productId, quantity });
  res.json(item);
};

// Get all items in cart
export const listCartItems = async (_req: Request, res: Response) => {
  const items = await CartItem.findAll({ include: [Product] });
  res.json(items);
};

export const getCartSummary = async (_req: Request, res: Response) => {
  const items = await CartItem.findAll({ include: [Product] });
  const summary = await calculateCart(items);

  res.json(summary);
};

export const clearCart = async (_req: Request, res: Response) => {
  await CartItem.destroy({ where: {} });
  res.json({ message: 'Cart cleared successfully.' });
};