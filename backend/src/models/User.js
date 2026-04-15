const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['student', 'teacher', 'admin'], required: true },
    createdAt: { type: Date, default: Date.now }
}, { discriminatorKey: 'role', collection: 'users' });

const User = mongoose.model('User', userSchema);

// Discriminators for Inheritance
const Student = User.discriminator('student', new mongoose.Schema({
    enrollmentNumber: { type: String, required: true, unique: true },
    branch: { type: String, required: true },
    semester: { type: Number, required: true }
}));

const Teacher = User.discriminator('teacher', new mongoose.Schema({
    employeeId: { type: String, required: true, unique: true },
    department: { type: String, required: true }
}));

const Admin = User.discriminator('admin', new mongoose.Schema({
    adminLevel: { type: String, default: 'superadmin' }
}));

module.exports = { User, Student, Teacher, Admin };
