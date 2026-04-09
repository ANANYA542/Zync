const eventRepository = require('../repositories/EventRepository');
const notificationService = require('./NotificationService');

class ExtracurricularService {
    async createActivity(userId, activityData) {
        // Enforce the event type is extracurricular or internship
        const type = ['internship', 'extracurricular'].includes(activityData.type) ? activityData.type : 'extracurricular';
        
        return await eventRepository.create({
            ...activityData,
            type,
            participants: [userId],
            startTime: new Date(activityData.startTime),
            endTime: new Date(activityData.endTime)
        });
    }

    async getActivities(userId) {
        const events = await eventRepository.getUpcomingEvents(userId);
        return events.filter(e => ['extracurricular', 'internship'].includes(e.type));
    }

    async triggerPortfolioReminders(userId) {
        // Check if there are closed/past internships or big hackathons
        // For simplicity, we just trigger a standard reminder manually.
        const message = 'Consider updating your resume with your recent extracurriculars and internships!';
        return await notificationService.createNotification(userId, message, 'reminder');
    }
}

module.exports = new ExtracurricularService();
