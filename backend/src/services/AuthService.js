const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/UserRepository');

/**
 * AuthService - handles authentication business logic.
 * Demonstrates Encapsulation: JWT secret and hash logic are hidden inside this service.
 */
class AuthService {
    /**
     * Register a new user (student or teacher).
     * @param {Object} data - { name, email, password, role, ...roleSpecificFields }
     */
    async register(data) {
        if (!data.email || !data.password || !data.name || !data.role) {
            throw new Error('name, email, password and role are required');
        }

        const existing = await userRepository.findByEmail(data.email);
        if (existing) throw new Error('Email already registered');

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(data.password, salt);

        let user;
        if (data.role === 'student') {
            if (!data.enrollmentNumber || !data.branch || !data.semester) {
                throw new Error('Student profile requires enrollmentNumber, branch and semester');
            }
            user = await userRepository.createStudent({ ...data, password: hashedPassword });
        } else if (data.role === 'teacher') {
            if (!data.employeeId || !data.department) {
                throw new Error('Teacher profile requires employeeId and department');
            }
            user = await userRepository.createTeacher({ ...data, password: hashedPassword });
        } else {
            user = await userRepository.create({ ...data, password: hashedPassword });
        }

        const token = this._generateToken(user._id, user.role);
        return { user: this._sanitize(user), token };
    }

    /**
     * Login with email and password.
     */
    async login(email, password) {
        const user = await userRepository.findByEmail(email);
        if (!user) throw new Error('Invalid credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const token = this._generateToken(user._id, user.role);
        return { user: this._sanitize(user), token };
    }

    /**
     * Private: generate a JWT token.
     * Encapsulation — token generation is internal to this service.
     */
    _generateToken(userId, role) {
        if (!process.env.JWT_SECRET) {
            throw new Error('JWT_SECRET is not configured');
        }
        return jwt.sign(
            { id: userId, role },
            process.env.JWT_SECRET,
            { expiresIn: '7d' }
        );
    }

    /**
     * Private: remove sensitive fields before returning user data.
     */
    _sanitize(user) {
        const obj = user.toObject();
        delete obj.password;
        return obj;
    }
}

module.exports = new AuthService();
