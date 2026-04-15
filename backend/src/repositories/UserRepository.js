const BaseRepository = require('./BaseRepository');
const { User, Student, Teacher } = require('../models/User');

class UserRepository extends BaseRepository {
    constructor() {
        super(User);
    }

    async findByEmail(email) {
        return await this.model.findOne({ email });
    }

    async createStudent(data) {
        const student = new Student(data);
        return await student.save();
    }

    async createTeacher(data) {
        const teacher = new Teacher(data);
        return await teacher.save();
    }
}

module.exports = new UserRepository();
