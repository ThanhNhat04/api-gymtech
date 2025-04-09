// config/swagger.js
const swaggerJsdoc = require('swagger-jsdoc');
require('dotenv').config();

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'GymTech API Documentation',
      version: '1.0.0',
      description: 'API Documentation cho dự án GymTech'
    },
    servers: [
      {
        url: 'http://localhost:' + process.env.PORT,
        description: 'Local server'
      }
    ]
  },
  apis: ['./routes/*.js'] // Đường dẫn chứa Swagger annotations (ở file routes)
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;
