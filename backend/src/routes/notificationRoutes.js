const express = require('express');
const router = express.Router();
const notificationController = require('../controllers/NotificationController');
const { protect } = require('../middleware/authMiddleware');

router.get('/', protect, notificationController.getAll.bind(notificationController));
router.get('/unread', protect, notificationController.getUnread.bind(notificationController));
router.get('/insights', protect, notificationController.getInsights.bind(notificationController));
router.patch('/mark-read', protect, notificationController.markAllRead.bind(notificationController));

module.exports = router;
