const BaseRepository = require('./BaseRepository');
const Course = require('../models/Course');

/**
 * CourseRepository - handles all course-level DB operations.
 */
class CourseRepository extends BaseRepository {
    constructor() {
        super(Course);
    }

    async findByTeacher(teacherId) {
        return await this.model.find({ teacher: teacherId });
    }

    async findCoursesForStudent(studentId) {
        return await this.model.find({ studentsEnrolled: studentId });
    }

    async enrollStudent(courseId, studentId) {
        return await this.model.findByIdAndUpdate(
            courseId,
            { $addToSet: { studentsEnrolled: studentId } },
            { new: true }
        );
    }
}

module.exports = new CourseRepository();
