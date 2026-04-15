const courseService = require('../services/CourseService');


class CourseController {
    async createCourse(req, res, next) {
        try {
            const course = await courseService.createCourse({ ...req.body, teacher: req.user.id });
            res.status(201).json({ success: true, data: course });
        } catch (err) {
            next(err);
        }
    }

    async enrollStudent(req, res, next) {
        try {
            const course = await courseService.enrollStudent(req.params.courseId, req.user.id);
            res.status(200).json({ success: true, data: course });
        } catch (err) {
            next(err);
        }
    }

    async getMyCourses(req, res, next) {
        try {
            let courses;
            if (req.user.role === 'teacher') {
                courses = await courseService.getCoursesByTeacher(req.user.id);
            } else {
                courses = await courseService.getCoursesByStudent(req.user.id);
            }
            res.status(200).json({ success: true, data: courses });
        } catch (err) {
            next(err);
        }
    }

    async getAllCourses(req, res, next) {
        try {
            const courses = await courseService.getAllCourses();
            res.status(200).json({ success: true, data: courses });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new CourseController();
