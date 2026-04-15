const attendanceService = require('../services/AttendanceService');


class AttendanceController {
    
    async markAttendance(req, res, next) {
        try {
            const { studentId, courseId, date, status } = req.body;
            if (!studentId || !courseId || !date || !status) {
                return res.status(400).json({ success: false, message: 'studentId, courseId, date, and status are required' });
            }
            const record = await attendanceService.markAttendance(
                studentId, courseId, date, status, req.user.id
            );
            res.status(201).json({ success: true, data: record });
        } catch (err) {
            next(err);
        }
    }

   
    async getPercentage(req, res, next) {
        try {
            const result = await attendanceService.getAttendancePercentage(
                req.user.id, req.params.courseId
            );
            res.status(200).json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }

    
    async getSafeSkips(req, res, next) {
        try {
            const upcomingClasses = parseInt(req.query.upcoming) || 0;
            const result = await attendanceService.calculateSafeSkips(
                req.user.id, req.params.courseId, upcomingClasses
            );
            res.status(200).json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }

    async getRecords(req, res, next) {
        try {
            const records = await attendanceService.getRecords(req.user.id, req.params.courseId);
            res.status(200).json({ success: true, data: records });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new AttendanceController();
