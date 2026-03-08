const BaseRepository = require('./BaseRepository');
const Attendance = require('../models/Attendance');

/**
 * AttendanceRepository extends BaseRepository (Repository Pattern)
 * Encapsulates all DB queries related to attendance records.
 */
class AttendanceRepository extends BaseRepository {
    constructor() {
        super(Attendance);
    }

    /**
     * Get all attendance records for a student in a specific course.
     */
    async findByStudentAndCourse(studentId, courseId) {
        return await this.model.find({ student: studentId, course: courseId });
    }

    /**
     * Count present and total classes for a student in a course.
     * Used by AttendanceService to calculate attendance percentage.
     */
    async getAttendanceSummary(studentId, courseId) {
        const records = await this.findByStudentAndCourse(studentId, courseId);
        const total = records.length;
        const present = records.filter(r => r.status === 'present').length;
        return { total, present, absent: total - present };
    }

    /**
     * Get all attendance for a specific course on a specific date.
     */
    async findByCourseAndDate(courseId, date) {
        const startOfDay = new Date(date);
        startOfDay.setHours(0, 0, 0, 0);
        const endOfDay = new Date(date);
        endOfDay.setHours(23, 59, 59, 999);
        return await this.model.find({
            course: courseId,
            date: { $gte: startOfDay, $lte: endOfDay }
        });
    }
}

module.exports = new AttendanceRepository();
