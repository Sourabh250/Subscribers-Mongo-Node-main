const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const subscriberModel = require('./models/subscribers') // Import the Subscriber model
const data = require('./data') // Import the data

// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection

// Error event for database connection issues
db.on('error', (err) => console.log(err))

// Success event for successful connection
db.once('open', () => console.log('Database created...'))

const refreshAll = async () => {
    await subscriberModel.deleteMany({}) // Delete all existing documents
    // console.log(connection)
    await subscriberModel.insertMany(data) // Insert data
    await mongoose.disconnect(); // Closing the database connection
}
refreshAll() 