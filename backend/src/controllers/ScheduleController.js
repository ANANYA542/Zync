const scheduleService = require('../services/ScheduleService');
const { LenientConflictStrategy } = require('../patterns/ConflictStrategy');

class ScheduleController {
   
    async createEvent(req, res, next) {
        try {
           
            if (req.query.strict === 'false') {
                scheduleService.setConflictStrategy(new LenientConflictStrategy());
            }

            const eventData = {
                ...req.body,
                organizer: req.user.id,
                participants: req.body.participants || [req.user.id]
            };

            const event = await scheduleService.createEvent(eventData);
            res.status(201).json({ success: true, data: event });
        } catch (err) {
            next(err);
        }
    }

   
    async getUpcomingEvents(req, res, next) {
        try {
            const events = await scheduleService.getUpcomingEvents(req.user.id);
            res.status(200).json({ success: true, data: events });
        } catch (err) {
            next(err);
        }
    }

    
    async getWorkload(req, res, next) {
        try {
            const result = await scheduleService.getWorkloadScore(req.user.id, req.user.role);
            res.status(200).json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new ScheduleController();
