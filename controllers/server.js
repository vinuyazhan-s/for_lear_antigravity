const express = require('express');
const path = require('path');
const authRoutes = require('./authRoutes');

const app = express();

// Middleware
app.use(express.json());

// Views - Serve static files
app.use(express.static(path.join(__dirname, 'views')));

// Routes
app.use('/api', authRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
