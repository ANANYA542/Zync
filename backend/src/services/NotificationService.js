const notificationRepository = require('../repositories/NotificationRepository');

/**
 * NotificationService - manage user notifications.
 * Separated from the Observer to allow direct notification creation too.
 */
class NotificationService {
    async getUserNotifications(userId) {
        return await notificationRepository.findByUser(userId);
    }

    async getUnread(userId) {
        return await notificationRepository.findUnread(userId);
    }

    async markAllRead(userId) {
        return await notificationRepository.markAllRead(userId);
    }

    async createNotification(userId, title, message, type = 'alert') {
        return await notificationRepository.create({ user: userId, title, message, type });
    }
}

module.exports = new NotificationService();
