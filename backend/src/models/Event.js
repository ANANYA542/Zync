const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    type: { type: String, enum: ['lecture', 'exam', 'assignment', 'extracurricular', 'internship'], required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    course: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    priorityScore: { type: Number, default: 1 } // Used for conflict resolution
}, { timestamps: true });

eventSchema.index({ participants: 1, startTime: 1 });
eventSchema.index({ type: 1, startTime: 1 });

eventSchema.pre('validate', function validateWindow(next) {
    if (this.endTime <= this.startTime) {
        return next(new Error('endTime must be greater than startTime'));
    }
    return next();
});

module.exports = mongoose.model('Event', eventSchema);
