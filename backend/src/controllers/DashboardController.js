const dashboardService = require('../services/DashboardService');

class DashboardController {
    async getMyDashboard(req, res, next) {
        try {
            const data = await dashboardService.getPersonalizedDashboard(req.user);
            res.status(200).json({ success: true, data });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new DashboardController();
