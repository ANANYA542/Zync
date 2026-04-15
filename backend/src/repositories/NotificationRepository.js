const BaseRepository = require('./BaseRepository');
const Notification = require('../models/Notification');

/**
 * NotificationRepository - manages all notification DB access.
 * Used by the Observer pattern (NotificationObserver).
 */
class NotificationRepository extends BaseRepository {
    constructor() {
        super(Notification);
    }

    async findByUser(userId) {
        return await this.model.find({ user: userId }).sort({ createdAt: -1 });
    }

    async markAllRead(userId) {
        return await this.model.updateMany({ user: userId, read: false }, { read: true });
    }

    async findUnread(userId) {
        return await this.model.find({ user: userId, read: false });
    }
}

module.exports = new NotificationRepository();
