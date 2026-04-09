const express = require('express');
const router = express.Router();
const extracurricularController = require('../controllers/ExtracurricularController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.use(protect); // Only logged in users can manage their extracurriculars
router.use(authorize('student')); // Primarily a student feature

router.post('/', extracurricularController.createActivity);
router.get('/', extracurricularController.getActivities);
router.post('/reminders', extracurricularController.triggerReminder);

module.exports = router;
