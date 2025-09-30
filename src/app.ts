import express from 'express';
import bodyParser from 'body-parser';
import productRoutes from './routes/product.routes';
import cartRoutes from './routes/cart.routes';

const app = express();
app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

export default app;
