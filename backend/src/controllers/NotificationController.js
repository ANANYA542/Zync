const notificationService = require('../services/NotificationService');


class NotificationController {
    async getAll(req, res, next) {
        try {
            const notifications = await notificationService.getUserNotifications(req.user.id);
            res.status(200).json({ success: true, data: notifications });
        } catch (err) {
            next(err);
        }
    }

    async getUnread(req, res, next) {
        try {
            const notifications = await notificationService.getUnread(req.user.id);
            res.status(200).json({ success: true, data: notifications });
        } catch (err) {
            next(err);
        }
    }

    async markAllRead(req, res, next) {
        try {
            await notificationService.markAllRead(req.user.id);
            res.status(200).json({ success: true, message: 'All notifications marked as read' });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new NotificationController();
