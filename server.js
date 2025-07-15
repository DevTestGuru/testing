const express = require('express');
const path = require('path');
require('dotenv').config();
const { swaggerUi, specs } = require('./server/config/swagger');

const app = express();

// Connect Database
// connectDB();

// Init Middleware
app.use(express.json());

// Swagger Documentation - Development only
if (process.env.NODE_ENV !== 'production') {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs, {
    explorer: true,
    customCss: '.swagger-ui .topbar { display: none }',
    customSiteTitle: "API Documentation"
  }));
  console.log('📚 Swagger docs available at http://localhost:5025/api-docs');
}

// Define Routes
app.use('/api/users', require('./server/routes/api/users'));
app.use('/api/auth', require('./server/routes/api/auth'));
app.use('/api/profile', require('./server/routes/api/profile'));
app.use('/api/posts', require('./server/routes/api/posts'));
app.use('/api/notes', require('./server/routes/api/notes'));

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const PORT = process.env.PORT || 5025;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
