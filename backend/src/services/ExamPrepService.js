const eventRepository = require('../repositories/EventRepository');
const attendanceService = require('./AttendanceService');
const { LastMinuteExamStrategy } = require('../patterns/RecommendationStrategy');

class ExamPrepService {
    constructor() {
        this.recommendationStrategy = new LastMinuteExamStrategy();
    }

    async getPreparationPlan(userId, role, options = {}) {
        if (role !== 'student') {
            return { plan: [], readinessBand: 'not_applicable' };
        }

        const now = new Date();
        const horizon = new Date(now);
        horizon.setDate(horizon.getDate() + (options.days || 21));
        const events = await eventRepository.findWithinWindow(userId, now, horizon);
        const upcomingExams = events
            .filter((event) => event.type === 'exam')
            .map((event) => ({
                title: event.title,
                startTime: event.startTime,
                courseId: event.course ? event.course.toString() : null
            }));

        const attendanceByCourse = {};
        for (const exam of upcomingExams) {
            if (!exam.courseId) {
                continue;
            }
            const stats = await attendanceService.calculateSafeSkips(userId, exam.courseId);
            attendanceByCourse[exam.courseId] = stats;
        }

        return this.recommendationStrategy.buildPlan({
            upcomingExams,
            attendance: attendanceByCourse,
            availableHoursPerDay: options.availableHoursPerDay || 3
        });
    }
}

module.exports = new ExamPrepService();
