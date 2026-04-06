const scheduleService = require('./ScheduleService');
const notificationService = require('./NotificationService');
const examPrepService = require('./ExamPrepService');

class DashboardService {
    async getPersonalizedDashboard(user) {
        const events = await scheduleService.getUpcomingEvents(user.id);
        const workload = await scheduleService.getWorkloadScore(user.id, user.role);
        const notifications = await notificationService.getUnread(user.id);
        const prep = await examPrepService.getPreparationPlan(user.id, user.role, { days: 14 });
        const clusteredDeadlines = this._buildDeadlineClusters(events);

        return {
            profile: { id: user.id, role: user.role },
            upcomingEvents: events.slice(0, 10),
            workload,
            unreadNotifications: notifications.length,
            deadlineClusters: clusteredDeadlines,
            examPreparation: prep
        };
    }

    _buildDeadlineClusters(events) {
        const byDate = {};
        for (const event of events) {
            const key = new Date(event.startTime).toISOString().slice(0, 10);
            byDate[key] = byDate[key] || [];
            byDate[key].push({ id: event._id, title: event.title, type: event.type });
        }

        return Object.entries(byDate)
            .filter(([, values]) => values.length >= 2)
            .map(([date, values]) => ({ date, itemCount: values.length, items: values }));
    }
}

module.exports = new DashboardService();
