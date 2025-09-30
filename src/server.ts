import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import sequelize from './database';

const PORT = process.env.PORT || 3000;

// Sync database
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
