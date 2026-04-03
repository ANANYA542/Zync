const examPrepService = require('../services/ExamPrepService');

class ExamPrepController {
    async getPlan(req, res, next) {
        try {
            const days = Number(req.query.days) || 21;
            const availableHoursPerDay = Number(req.query.availableHoursPerDay) || 3;
            const data = await examPrepService.getPreparationPlan(req.user.id, req.user.role, {
                days,
                availableHoursPerDay
            });
            res.status(200).json({ success: true, data });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ExamPrepController();
