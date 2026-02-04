const express = require('express');
const router = express.Router();
const itemsController = require('../controllers/itemsController');

// GET all items
router.get('/', itemsController.getAllItems);

// GET single item by ID
router.get('/:id', itemsController.getItemById);

// POST create new item
router.post('/', itemsController.createItem);

// PUT update item by ID
router.put('/:id', itemsController.updateItem);

// DELETE item by ID
router.delete('/:id', itemsController.deleteItem);

module.exports = router;
