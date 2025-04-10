// app.js
const express = require('express');
const connectDB = require('./config/db');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./config/swagger');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Kết nối MongoDB
connectDB();

// Middleware parse JSON
app.use(express.json());
app.use(cors());

// app.use(cors({
//   origin: '*', // Cho phép tất cả nguồn gốc
//   methods: ['GET', 'POST', 'PUT', 'DELETE'], // Các phương thức cho phép
//   allowedHeaders: ['Content-Type', 'Authorization'], // Các tiêu đề cho phép
// }));

// Sử dụng cors cho toàn bộ API
app.use(cors());

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
