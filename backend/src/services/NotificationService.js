const notificationRepository = require('../repositories/NotificationRepository');
const scheduleService = require('./ScheduleService');

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

    async getInsightSummary(userId, role) {
        const unread = await this.getUnread(userId);
        const workload = await scheduleService.getWorkloadScore(userId, role);

        return {
            unreadCount: unread.length,
            workloadLevel: workload.level,
            workloadScore: workload.workloadScore,
            recommendedAction: workload.level === 'high'
                ? 'Re-prioritize tasks and avoid adding non-critical events this week.'
                : 'Maintain your current schedule cadence.'
        };
    }
}

module.exports = new NotificationService();
