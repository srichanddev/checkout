# Clone the Repository
git clone <your-github-repo-url>
cd checkout


# Install Dependencies
npm install

# Configure Environment Variables
NODE_ENV=development
DB_HOST=localhost
DB_PORT=3306
DB_NAME=checkout_backend
DB_USER=root
DB_PASSWORD=yourpassword
PORT=3000

# Start the Server

npx ts-node src/server.ts

# Folder Structure📂
src/
  controllers/
  models/
  routes/
  services/
  database/
  ...
tests/
postman/
README.md
.env

# Database Structure

Product
    id (PK)
    name
    price

CartItem
    id (PK)
    productId (FK)
    quantity

# API Endpoints

Product APIs
    POST: /api/products/seed
    GET: 	/api/products

Cart APIs
    POST:/api/cart/add
    GET:/api/cart
    GET:/api/cart/summary
    DELETE:/api/cart/clear