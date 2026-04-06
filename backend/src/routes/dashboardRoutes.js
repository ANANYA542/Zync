const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/DashboardController');
const { protect } = require('../middleware/authMiddleware');

router.get('/me', protect, dashboardController.getMyDashboard.bind(dashboardController));

module.exports = router;
