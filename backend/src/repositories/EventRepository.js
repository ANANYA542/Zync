const BaseRepository = require('./BaseRepository');
const Event = require('../models/Event');

class EventRepository extends BaseRepository {
    constructor() {
        super(Event);
    }

    async findOverlappingEvents(userId, startTime, endTime) {
        return await this.model.find({
            participants: userId,
            $or: [
                { startTime: { $lt: endTime, $gte: startTime } },
                { endTime: { $gt: startTime, $lte: endTime } }
            ]
        });
    }

    async getUpcomingEvents(userId, date = new Date()) {
        return await this.model.find({
            participants: userId,
            startTime: { $gte: date }
        }).sort({ startTime: 1 });
    }
}

module.exports = new EventRepository();
