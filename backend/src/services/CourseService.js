const courseRepository = require('../repositories/CourseRepository');

/**
 * CourseService - course management business logic.
 */
class CourseService {
    async createCourse(data) {
        return await courseRepository.create(data);
    }

    async enrollStudent(courseId, studentId) {
        const course = await courseRepository.findById(courseId);
        if (!course) throw new Error('Course not found');
        return await courseRepository.enrollStudent(courseId, studentId);
    }

    async getCoursesByTeacher(teacherId) {
        return await courseRepository.findByTeacher(teacherId);
    }

    async getCoursesByStudent(studentId) {
        return await courseRepository.findCoursesForStudent(studentId);
    }

    async getAllCourses() {
        return await courseRepository.find();
    }
}

module.exports = new CourseService();
