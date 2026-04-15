const notificationRepository = require('../repositories/NotificationRepository');

/**
 * DeadlineNotificationObserver - an Observer in the Observer Pattern.
 * When a new event is created, this observer automatically creates a
 * Notification record in the database for each participant.
 *
 * Demonstrates:
 * - Observer Pattern (concrete observer)
 * - Single Responsibility Principle
 */
class DeadlineNotificationObserver {
    async update(event) {
        if (!event.participants || event.participants.length === 0) return;

        const notifications = event.participants.map(userId => ({
            user: userId,
            title: `Upcoming: ${event.title}`,
            message: `You have "${event.title}" scheduled on ${new Date(event.startTime).toLocaleString()}`,
            type: 'reminder',
            read: false
        }));

        for (const notifData of notifications) {
            await notificationRepository.create(notifData);
        }

        console.log(`[Observer] DeadlineNotificationObserver: created ${notifications.length} notification(s) for event "${event.title}"`);
    }
}

module.exports = new DeadlineNotificationObserver();
