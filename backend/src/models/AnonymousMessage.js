const mongoose = require('mongoose');

const anonymousMessageSchema = new mongoose.Schema({
    sender: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    recipient: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    category: {
        type: String,
        enum: ['academic', 'administrative', 'feedback', 'other'],
        default: 'academic'
    },
    content: { type: String, required: true, trim: true, maxlength: 2000 },
    isAnonymous: { type: Boolean, default: true },
    isResolved: { type: Boolean, default: false },
    status: { type: String, enum: ['open', 'reviewed', 'resolved', 'blocked'], default: 'open' },
    moderation: {
        reported: { type: Boolean, default: false },
        reportCount: { type: Number, default: 0 },
        reportReason: { type: String, default: '' }
    }
}, { timestamps: true });

anonymousMessageSchema.index({ recipient: 1, status: 1, createdAt: -1 });
anonymousMessageSchema.index({ sender: 1, createdAt: -1 });
anonymousMessageSchema.index({ category: 1, createdAt: -1 });

module.exports = mongoose.model('AnonymousMessage', anonymousMessageSchema);
