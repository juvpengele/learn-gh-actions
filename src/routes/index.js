const express = require('express');
const router = express.Router();
const itemsRouter = require('./items');

// Mount routes
router.use('/items', itemsRouter);

// API info endpoint
router.get('/', (req, res) => {
  res.json({
    message: 'API is working',
    version: '1.0.0',
    endpoints: {
      items: '/api/items'
    }
  });
});

module.exports = router;
