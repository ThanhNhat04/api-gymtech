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
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);
module.exports = swaggerSpec;


// servers: [
//   {
//     url: 'https://gym.s4h.edu.vn:' + process.env.PORT,
//     description: 'Local server'
//   }
// ]
