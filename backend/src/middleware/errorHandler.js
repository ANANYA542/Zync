
const errorHandler = (err, req, res, next) => {
    console.error(`[Error] ${err.message}`);

    const statusCode = err.statusCode || 500;
    const response = {
        success: false,
        message: err.message || 'Internal Server Error'
    };


    if (err.conflicts) {
        response.conflicts = err.conflicts;
        response.strategyUsed = err.strategyUsed;
        return res.status(409).json(response);
    }

    res.status(statusCode).json(response);
};

module.exports = errorHandler;
