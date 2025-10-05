// In your index.js
const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db'); // Note the path
const productRoutes = require('./routes/productRoutes'); // Note the path

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

// This tells express to use your product routes
app.use('/products', productRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));