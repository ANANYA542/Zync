const extracurricularService = require('../services/ExtracurricularService');

class ExtracurricularController {
    async createActivity(req, res, next) {
        try {
            const activity = await extracurricularService.createActivity(req.user.id, req.body);
            res.status(201).json({ success: true, data: activity });
        } catch (error) {
            next(error);
        }
    }

    async getActivities(req, res, next) {
        try {
            const activities = await extracurricularService.getActivities(req.user.id);
            res.status(200).json({ success: true, data: activities });
        } catch (error) {
            next(error);
        }
    }

    async triggerReminder(req, res, next) {
        try {
            const notification = await extracurricularService.triggerPortfolioReminders(req.user.id);
            res.status(200).json({ success: true, data: notification });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = new ExtracurricularController();
