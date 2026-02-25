const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    courseCode: { type: String, required: true, unique: true, uppercase: true, trim: true },
    title: { type: String, required: true },
    credits: { type: Number, required: true },
    teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    studentsEnrolled: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
}, { timestamps: true });


courseSchema.index({ teacher: 1 });
courseSchema.index({ studentsEnrolled: 1 });

module.exports = mongoose.model('Course', courseSchema);
