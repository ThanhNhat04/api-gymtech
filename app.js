// app.js
const express = require('express');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
require('dotenv').config();

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware parse JSON
app.use(express.json());

// Định nghĩa các route
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/exercises', require('./routes/exerciseRoutes'));
app.use('/api/posts', require('./routes/postRoutes'));
app.use('/api/friendships', require('./routes/friendshipRoutes'));

// Swagger UI cho tài liệu API
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại cổng ${PORT}`);
});
