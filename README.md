# Express.js API Boilerplate

A simple and clean Express.js API boilerplate with a RESTful architecture.

## Features

- ✅ Express.js server setup
- ✅ RESTful API structure
- ✅ CORS enabled
- ✅ Environment variables support
- ✅ Error handling middleware
- ✅ Example CRUD endpoints
- ✅ Clean folder structure
- ✅ JSON request/response handling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd learn-gh-actions
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env`:
```
PORT=3000
NODE_ENV=development
```

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Mode
```bash
npm start
```

The server will start on `http://localhost:3000`

## Project Structure

```
learn-gh-actions/
├── src/
│   ├── controllers/        # Request handlers
│   │   └── itemsController.js
│   ├── routes/            # API routes
│   │   ├── index.js
│   │   └── items.js
│   ├── middleware/        # Custom middleware
│   │   └── errorHandler.js
│   ├── config/           # Configuration files
│   └── server.js         # Application entry point
├── .env.example          # Environment variables example
├── .gitignore           # Git ignore file
├── package.json         # Project dependencies
└── README.md           # Project documentation
```

## API Endpoints

### Base URL
```
http://localhost:3000
```

### Health Check
- **GET** `/` - Check if API is running

### Items API
- **GET** `/api/items` - Get all items
- **GET** `/api/items/:id` - Get a single item by ID
- **POST** `/api/items` - Create a new item
- **PUT** `/api/items/:id` - Update an item by ID
- **DELETE** `/api/items/:id` - Delete an item by ID

## Example API Requests

### Get all items
```bash
curl http://localhost:3000/api/items
```

### Get a single item
```bash
curl http://localhost:3000/api/items/1
```

### Create a new item
```bash
curl -X POST http://localhost:3000/api/items \
  -H "Content-Type: application/json" \
  -d '{"name":"New Item","description":"This is a new item"}'
```

### Update an item
```bash
curl -X PUT http://localhost:3000/api/items/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Item","description":"This item has been updated"}'
```

### Delete an item
```bash
curl -X DELETE http://localhost:3000/api/items/1
```

## Response Format

All API responses follow this format:

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "error": {
    "message": "Error message",
    "status": 400
  }
}
```

## Adding New Routes

1. Create a new route file in `src/routes/`:
```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({ message: 'New route' });
});

module.exports = router;
```

2. Create a controller in `src/controllers/`:
```javascript
const getAll = (req, res) => {
  // Your logic here
  res.json({ success: true, data: [] });
};

module.exports = { getAll };
```

3. Import and use in `src/routes/index.js`:
```javascript
const newRouter = require('./newRoute');
router.use('/new', newRouter);
```

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `PORT` | Server port | `3000` |
| `NODE_ENV` | Environment mode | `development` |

## Error Handling

The API includes a global error handler that catches all errors and returns a consistent error response format. In development mode, error stack traces are included in the response.

## License

ISC

## Contributing

Feel free to submit issues and enhancement requests!
