const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');
const dotenv = require('dotenv');
const initDatabase = require('./utils/initDatabase');
const PORT = process.env.PORT || 6004
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database Configuration
const pool = new Pool({
    user: process.env.PG_USER,
    host: process.env.PG_HOST,
    database: process.env.PG_DATABASE,
    password: process.env.PG_PASSWORD,
    port: process.env.PG_PORT,
});

// Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/ratings', require('./routes/ratingRoutes'));
app.use('/api/spotify', require('./routes/spotifyRoutes'));
app.use('/api/profile', require('./routes/profileRoutes'));
app.use('/api/lists', require('./routes/listRoutes'));


// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
});


async function startServer() {
    try {
        // Initialize database
        // Pass true to force recreate tables
        const forceSync = process.env.DB_FORCE_SYNC === 'true';
        await initDatabase(forceSync);

        // Start server
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error('Server startup error:', error);
        process.exit(1);
    }
}

startServer();