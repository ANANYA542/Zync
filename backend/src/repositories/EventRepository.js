const BaseRepository = require('./BaseRepository');
const Event = require('../models/Event');

class EventRepository extends BaseRepository {
    constructor() {
        super(Event);
    }

    async findOverlappingEvents(userId, startTime, endTime) {
        return await this.model.find({
            participants: userId,
            startTime: { $lt: endTime },
            endTime: { $gt: startTime }
        });
    }

    async getUpcomingEvents(userId, date = new Date()) {
        return await this.model.find({
            participants: userId,
            startTime: { $gte: date }
        }).sort({ startTime: 1 });
    }

    async findWithinWindow(userId, from, to) {
        return await this.model.find({
            participants: userId,
            startTime: { $gte: from, $lte: to }
        }).sort({ startTime: 1 });
    }
}

module.exports = new EventRepository();
