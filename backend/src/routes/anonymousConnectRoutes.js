const express = require('express');
const router = express.Router();
const anonymousConnectController = require('../controllers/AnonymousConnectController');
const { protect, authorize } = require('../middleware/authMiddleware');

router.post('/messages', protect, anonymousConnectController.createMessage.bind(anonymousConnectController));
router.get('/messages/inbox', protect, anonymousConnectController.getInbox.bind(anonymousConnectController));
router.get('/messages/outbox', protect, anonymousConnectController.getOutbox.bind(anonymousConnectController));
router.patch(
    '/messages/:messageId/resolve',
    protect,
    authorize('teacher', 'admin'),
    anonymousConnectController.markResolved.bind(anonymousConnectController)
);
router.patch('/messages/:messageId/report', protect, anonymousConnectController.report.bind(anonymousConnectController));

module.exports = router;
