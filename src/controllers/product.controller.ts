import { Request, Response } from 'express';
import { Product } from '../models/product.model';

// List products
export const listProducts = async (_req: Request, res: Response) => {
  const products = await Product.findAll();
  res.json(products);
};

// Seed products (A, B, C, D) for demo
export const seedProducts = async (_req: Request, res: Response) => {
  await Product.bulkCreate([
  { name: 'A', price: 30 },
  { name: 'B', price: 20 },
  { name: 'C', price: 50 },
  { name: 'D', price: 15 }
] as any[]);
  res.json({ message: 'Products seeded' });
};
