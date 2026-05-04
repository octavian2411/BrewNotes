require('dotenv').config();
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

// Test route
// app.get('/api/hello', (req, res) => {
//   res.json({ message: 'Hello from Node backend!' });
// });

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send("Server is working ");
});

app.get('/protected', apiAuth, (req, res) => {
  res.json({ message: `Hello ${req.user.username}` });
});

console.log("ENV:", process.env.MONGO_URI)
// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

