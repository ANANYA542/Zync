const attendanceRepository = require('../repositories/AttendanceRepository');

/**
 * AttendanceService - core attendance business logic.
 *
 * Demonstrates:
 * - Abstraction: the formula for safe-skip and percentage is hidden here.
 * - Encapsulation: business rules (e.g., 75% threshold) are configurable here.
 */
class AttendanceService {
    constructor() {
        this.MIN_ATTENDANCE_PERCENT = 75; // Institutional threshold
    }

    /**
     * Mark attendance for a student in a specific course.
     */
    async markAttendance(studentId, courseId, date, status, teacherId) {
        return await attendanceRepository.create({
            student: studentId,
            course: courseId,
            date: new Date(date),
            status,
            markedBy: teacherId
        });
    }

    /**
     * Calculate the current attendance percentage for a student in a course.
     */
    async getAttendancePercentage(studentId, courseId) {
        const { total, present } = await attendanceRepository.getAttendanceSummary(studentId, courseId);
        if (total === 0) return { percentage: 0, total, present, absent: 0 };
        const percentage = ((present / total) * 100).toFixed(2);
        return { percentage: parseFloat(percentage), total, present, absent: total - present };
    }

    /**
     * Calculate how many more classes a student can safely skip without falling
     * below the minimum attendance threshold.
     *
     * Formula: maxAbsent = floor(total * (1 - MIN/100)) - currentAbsent
     */
    async calculateSafeSkips(studentId, courseId, upcomingClasses = 0) {
        const { total, present, absent } = await attendanceRepository.getAttendanceSummary(studentId, courseId);
        const totalFuture = total + upcomingClasses;

        // How many total absences allowed over all (past + future) classes?
        const maxAllowedAbsent = Math.floor(totalFuture * (1 - this.MIN_ATTENDANCE_PERCENT / 100));
        const safeSkipsLeft = maxAllowedAbsent - absent;

        const percentage = total === 0 ? 0 : parseFloat(((present / total) * 100).toFixed(2));
        const atRisk = percentage < this.MIN_ATTENDANCE_PERCENT;

        return {
            currentPercentage: percentage,
            safeSkipsLeft: Math.max(0, safeSkipsLeft),
            atRisk,
            present,
            absent,
            total,
            threshold: this.MIN_ATTENDANCE_PERCENT
        };
    }

    /**
     * Get full attendance records for a student in a course.
     */
    async getRecords(studentId, courseId) {
        return await attendanceRepository.findByStudentAndCourse(studentId, courseId);
    }
}

module.exports = new AttendanceService();
