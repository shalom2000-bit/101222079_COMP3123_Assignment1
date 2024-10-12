const express = require('express');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to COMP3123 Assignment!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const connectDB = require('./db');

// Connect to MongoDB
connectDB();

const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

