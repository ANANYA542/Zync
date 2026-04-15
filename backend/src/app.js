const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

try {
    app.use(helmet());
} catch (e) {}
try {
    app.use(morgan('dev'));
} catch (e) {}

// Basic route entry point
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Zync API is running successfully'
    });
});

// TODO: Import and use API routes here

module.exports = app;
