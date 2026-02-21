const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());

// Test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Node backend!' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});