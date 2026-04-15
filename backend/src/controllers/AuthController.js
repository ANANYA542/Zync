const authService = require('../services/AuthService');


class AuthController {
    async register(req, res, next) {
        try {
            const result = await authService.register(req.body);
            res.status(201).json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }

    async login(req, res, next) {
        try {
            const { email, password } = req.body;
            if (!email || !password) {
                return res.status(400).json({ success: false, message: 'Email and password are required' });
            }
            const result = await authService.login(email, password);
            res.status(200).json({ success: true, data: result });
        } catch (err) {
            next(err);
        }
    }

    async getMe(req, res, next) {
        try {
            res.status(200).json({ success: true, data: req.user });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new AuthController();
