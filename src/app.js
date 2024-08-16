
const express = require('express');
const app = express();
const subscriberModel = require('./models/subscribers');

// Your code goes here

// Endpoint to fetch a list of subscribers
app.get('/subscribers', async (req,res) => {
    try {
        const subscribers = await subscriberModel.find({});
        res.status(200).json(subscribers);
    } catch(error) {
        console.error('An error occurred while fetching subscribers:', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message});
    }
});

// Endpoint to fetch a list of subscribers with name and subscribedChannel
app.get('/subscribers/names', async (req,res) => {
    try {
        const subscriberNames = await subscriberModel.find({}, 'name subscribedChannel');
        res.status(200).json(subscriberNames);
    } catch(error) {
        console.error('An error occurred while fetching subscriber names:', error.message);
        res.status(500).json({ message: 'Internal Server Error', error: error.message});
    }
});

// Endpoint to fetch a single subscriber by ID
app.get('/subscribers/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const subscriber = await subscriberModel.findById(id.trim());
        if (!subscriber) {
            return res.status(400).json({message: 'Subscriber not found'});
        }
        res.status(200).json(subscriber);
    } catch(error) {
        res.status(400).json({message: error.message});
    }
});






module.exports = app;