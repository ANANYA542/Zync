const express = require('express');
const router = express.Router();
const courseController = require('../controllers/CourseController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/', protect, authorize('teacher', 'admin'), courseController.createCourse.bind(courseController));
router.post('/:courseId/enroll', protect, authorize('student'), courseController.enrollStudent.bind(courseController));
router.get('/my', protect, courseController.getMyCourses.bind(courseController));
router.get('/', protect, courseController.getAllCourses.bind(courseController));

module.exports = router;
