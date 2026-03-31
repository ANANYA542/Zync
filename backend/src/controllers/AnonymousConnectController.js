const anonymousConnectService = require('../services/AnonymousConnectService');

class AnonymousConnectController {
    async createMessage(req, res, next) {
        try {
            const data = await anonymousConnectService.createMessage(req.user.id, req.body);
            res.status(201).json({ success: true, data });
        } catch (err) {
            next(err);
        }
    }

    async getInbox(req, res, next) {
        try {
            const data = await anonymousConnectService.getInbox(req.user.id);
            res.status(200).json({ success: true, data });
        } catch (err) {
            next(err);
        }
    }

    async getOutbox(req, res, next) {
        try {
            const data = await anonymousConnectService.getOutbox(req.user.id);
            res.status(200).json({ success: true, data });
        } catch (err) {
            next(err);
        }
    }

    async markResolved(req, res, next) {
        try {
            const data = await anonymousConnectService.markResolved(req.params.messageId);
            res.status(200).json({ success: true, data });
        } catch (err) {
            next(err);
        }
    }

    async report(req, res, next) {
        try {
            const data = await anonymousConnectService.reportMessage(req.params.messageId, req.body.reason);
            res.status(200).json({ success: true, data });
        } catch (err) {
            next(err);
        }
    }
}

module.exports = new AnonymousConnectController();
