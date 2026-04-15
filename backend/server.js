require('dotenv').config();
const app = require('./src/app');
const dbConnection = require('./src/config/db');

const PORT = process.env.PORT || 5000;

const startServer = async () => {
    try {
        await dbConnection.connect();
        app.listen(PORT, () => {
            console.log(`Server started on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
};

startServer();
