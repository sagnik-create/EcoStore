const express = require('express');
const cors = require('cors');
const authRoutes = require('./Routes/authRoutes'); // Import auth routes

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/api/auth', authRoutes); // Mount auth routes

app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from the backend! 👋' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});