const express = require('express');
const router = express.Router();
const attendanceController = require('../controllers/AttendanceController');
const { protect, authorize } = require('../middleware/authMiddleware');


router.post('/mark', protect, authorize('teacher', 'admin'), attendanceController.markAttendance.bind(attendanceController));


router.get('/percentage/:courseId', protect, attendanceController.getPercentage.bind(attendanceController));
router.get('/safe-skips/:courseId', protect, authorize('student'), attendanceController.getSafeSkips.bind(attendanceController));
router.get('/records/:courseId', protect, attendanceController.getRecords.bind(attendanceController));

module.exports = router;
