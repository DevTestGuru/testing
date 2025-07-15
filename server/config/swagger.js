const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Server API',
      version: '0.2.0',
      description: 'API documentation'
    },
    servers: [
      {
        url: 'http://localhost:5025/api',
        description: 'Development server'
      }
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: 'http',
          scheme: 'bearer',
          bearerFormat: 'JWT'
        }
      }
    }
  },
  apis: [
    './server/routes/api/notes.js',
    './server/routes/api/auth.js',
    './server/routes/api/users.js',
    './server/routes/api/posts.js',
    './server/routes/api/profile.js'
  ]
};

const specs = swaggerJsdoc(options);

module.exports = {
  swaggerUi,
  specs
};
