const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, default: '' },
    type: { type: String, enum: ['lecture', 'exam', 'assignment', 'extracurricular', 'internship'], required: true },
    startTime: { type: Date, required: true },
    endTime: { type: Date, required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    priorityScore: { type: Number, default: 1 } // Used for conflict resolution
});

module.exports = mongoose.model('Event', eventSchema);
