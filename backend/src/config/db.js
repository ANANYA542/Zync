const mongoose = require('mongoose');

class DatabaseConnection {
    constructor() {
        if (!DatabaseConnection.instance) {
            this.isConnected = false;
            DatabaseConnection.instance = this;
        }
        return DatabaseConnection.instance;
    }

    async connect() {
        if (this.isConnected) {
            console.log('Using existing database connection');
            return;
        }

        try {
            const uri = process.env.MONGO_URI || 'mongodb://localhost:27017/zync';
            const db = await mongoose.connect(uri);
            this.isConnected = db.connections[0].readyState;
            console.log('MongoDB connection established successfully');
        } catch (error) {
            console.error('MongoDB connection failed:', error.message);
            throw error;
        }
    }
}

const dbConnection = new DatabaseConnection();
// Removed Object.freeze to allow state updates.

module.exports = dbConnection;
