const anonymousMessageRepository = require('../repositories/AnonymousMessageRepository');
const notificationService = require('./NotificationService');

class AnonymousConnectService {
    async createMessage(senderId, payload) {
        const message = await anonymousMessageRepository.create({
            sender: senderId,
            recipient: payload.recipientId,
            content: payload.content,
            category: payload.category || 'academic',
            isAnonymous: payload.isAnonymous !== false
        });

        await notificationService.createNotification(
            payload.recipientId,
            'New anonymous query',
            'You have a new message in Teacher-Student Connect.',
            'alert'
        );

        return message;
    }

    async getInbox(userId) {
        return anonymousMessageRepository.findInboxByUser(userId);
    }

    async getOutbox(userId) {
        return anonymousMessageRepository.findOutboxByUser(userId);
    }

    async markResolved(messageId) {
        return anonymousMessageRepository.updateById(messageId, { isResolved: true, status: 'resolved' });
    }

    async reportMessage(messageId, reason) {
        return anonymousMessageRepository.reportMessage(messageId, reason);
    }
}

module.exports = new AnonymousConnectService();
