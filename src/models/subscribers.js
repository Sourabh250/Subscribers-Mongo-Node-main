const mongoose = require('mongoose');

// Defining the schema for the Subscriber model
const susbcriberSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    subscribedChannel:{
        type: String,
        required: true,
    },
    subscribedDate: {
        type: Date,
        required: true,
        default: Date.now // Sets the default value to the current date and time
    }
})

// Exporting the Subscriber model
module.exports = mongoose.model('Subscriber',susbcriberSchema);