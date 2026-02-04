// In-memory storage for demo purposes
let items = [
  { id: 1, name: 'Item 1', description: 'First item', createdAt: new Date().toISOString() },
  { id: 2, name: 'Item 2', description: 'Second item', createdAt: new Date().toISOString() }
];

let nextId = 3;

// Get all items
const getAllItems = (req, res) => {
  res.json({
    success: true,
    count: items.length,
    data: items
  });
};

// Get item by ID
const getItemById = (req, res) => {
  const id = parseInt(req.params.id);
  const item = items.find(i => i.id === id);

  if (!item) {
    return res.status(404).json({
      success: false,
      error: 'Item not found'
    });
  }

  res.json({
    success: true,
    data: item
  });
};

// Create new item
const createItem = (req, res) => {
  const { name, description } = req.body;

  if (!name) {
    return res.status(400).json({
      success: false,
      error: 'Name is required'
    });
  }

  const newItem = {
    id: nextId++,
    name,
    description: description || '',
    createdAt: new Date().toISOString()
  };

  items.push(newItem);

  res.status(201).json({
    success: true,
    data: newItem
  });
};

// Update item by ID
const updateItem = (req, res) => {
  const id = parseInt(req.params.id);
  const { name, description } = req.body;
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Item not found'
    });
  }

  items[itemIndex] = {
    ...items[itemIndex],
    ...(name && { name }),
    ...(description !== undefined && { description }),
    updatedAt: new Date().toISOString()
  };

  res.json({
    success: true,
    data: items[itemIndex]
  });
};

// Delete item by ID
const deleteItem = (req, res) => {
  const id = parseInt(req.params.id);
  const itemIndex = items.findIndex(i => i.id === id);

  if (itemIndex === -1) {
    return res.status(404).json({
      success: false,
      error: 'Item not found'
    });
  }

  const deletedItem = items.splice(itemIndex, 1)[0];

  res.json({
    success: true,
    data: deletedItem
  });
};

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem
};
