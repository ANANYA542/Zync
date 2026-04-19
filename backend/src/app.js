const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

// Route imports
const authRoutes = require('./routes/authRoutes');
const attendanceRoutes = require('./routes/attendanceRoutes');
const scheduleRoutes = require('./routes/scheduleRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const courseRoutes = require('./routes/courseRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes');
const examPrepRoutes = require('./routes/examPrepRoutes');
const anonymousConnectRoutes = require('./routes/anonymousConnectRoutes');
const extracurricularRoutes = require('./routes/extracurricularRoutes');

// Middleware import
const errorHandler = require('./middleware/errorHandler');

const app = express();

// Global Middleware
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/', (req, res) => {
    res.status(200).json({
        success: true,
        message: 'Zync API is running',
        version: '1.0.0'
    });
});

// API Routes
app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/attendance', attendanceRoutes);
app.use('/api/v1/schedule', scheduleRoutes);
app.use('/api/v1/notifications', notificationRoutes);
app.use('/api/v1/courses', courseRoutes);
app.use('/api/v1/dashboard', dashboardRoutes);
app.use('/api/v1/exam-prep', examPrepRoutes);
app.use('/api/v1/anonymous-connect', anonymousConnectRoutes);
app.use('/api/v1/extracurriculars', extracurricularRoutes);

// 404 handler
app.use((req, res) => {
    res.status(404).json({ success: false, message: `Route ${req.originalUrl} not found` });
});

// Global error handler (must be last)
app.use(errorHandler);

module.exports = app;
