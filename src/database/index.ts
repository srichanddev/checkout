import { Sequelize } from 'sequelize-typescript';
import { Product } from '../models/product.model';
import { CartItem } from '../models/cart.model';
import dotenv from 'dotenv';


dotenv.config();

const sequelize = new Sequelize({
  dialect: 'mysql', // or 'postgres', 'sqlite', etc.
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 3306,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  models: [Product, CartItem]
});

export default sequelize;
