const BaseRepository = require('./BaseRepository');
const AnonymousMessage = require('../models/AnonymousMessage');

class AnonymousMessageRepository extends BaseRepository {
    constructor() {
        super(AnonymousMessage);
    }

    async findInboxByUser(userId) {
        return this.model.find({ recipient: userId }).sort({ createdAt: -1 });
    }

    async findOutboxByUser(userId) {
        return this.model.find({ sender: userId }).sort({ createdAt: -1 });
    }

    async reportMessage(messageId, reason) {
        return this.model.findByIdAndUpdate(
            messageId,
            {
                $set: {
                    'moderation.reported': true,
                    'moderation.reportReason': reason || 'No reason provided'
                },
                $inc: { 'moderation.reportCount': 1 }
            },
            { new: true }
        );
    }
}

module.exports = new AnonymousMessageRepository();
