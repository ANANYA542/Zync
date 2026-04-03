const express = require('express');
const router = express.Router();
const examPrepController = require('../controllers/ExamPrepController');
const { protect } = require('../middleware/authMiddleware');

router.get('/plan', protect, examPrepController.getPlan.bind(examPrepController));

module.exports = router;
