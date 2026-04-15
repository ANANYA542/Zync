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
            const db = await mongoose.connect(uri, {
                // useNewUrlParser and useUnifiedTopology are strictly not throwing errors usually in newer mongoose but recommended for completeness
                // Note: Newer Mongoose no longer needs these options but we leave it clean.
            });
            this.isConnected = db.connections[0].readyState;
            console.log('MongoDB connection established successfully');
        } catch (error) {
            console.error('MongoDB connection failed. Continuing without database for now:', error.message);
        }
    }
}

const dbConnection = new DatabaseConnection();
// Prevent modification to the singleton
Object.freeze(dbConnection);

module.exports = dbConnection;
