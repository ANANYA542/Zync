const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/ScheduleController');
const { protect } = require('../middleware/authMiddleware');

router.post('/events', protect, scheduleController.createEvent.bind(scheduleController));
router.get('/events', protect, scheduleController.getUpcomingEvents.bind(scheduleController));
router.get('/workload', protect, scheduleController.getWorkload.bind(scheduleController));

module.exports = router;
