const chai = require('chai')
const chaiHttp = require('chai-http')
const mongoose = require('mongoose')
const app = require('../src/app')
const subscriberModel = require('../src/models/subscribers')
const data = require('../src/data')
const dotenv = require('dotenv')
dotenv.config() // Load environment variables

chai.use(chaiHttp); // Use chaiHttp for making HTTP requests
const { expect } = chai;

const DATABASE_URL = process.env.TEST_DATABASE_URL; // Get the test database URL from environment variables for testing

describe('Subscriber API', () => {
    // Before running the tests, connect to the database and prepare the data
    before(async () => {
        await mongoose.connect(DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true });
        await subscriberModel.deleteMany({});
        await subscriberModel.insertMany(data);
    });
    // After running the tests, clean up the data,re-insert the original data and disconnect from the database
    after(async () => {
        await subscriberModel.deleteMany({});
        await subscriberModel.insertMany(data);
        // Disconnect from the database
        await mongoose.disconnect();
    });

    // Test case for getting all subscribers
    describe('GET /subscribers', () => {
        it('should return an array of subscribers with a 200 status', async () => {
            const res = await chai.request(app).get('/subscribers');
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body).to.have.lengthOf(data.length);
            expect(res.body[0]).to.have.property('name').eql('Jeread Krus');
        });
    });

    // Test case for getting a list of subscribers with name and subscribedChannel
    describe('GET /subscribers/names', () => {
        it('should return an array of subscribers with name & subscribedChannel with a 200 status', async () => {
            const res = await chai.request(app).get('/subscribers/names');
            expect(res).to.have.status(200);
            expect(res.body).to.be.an('array');
            expect(res.body[0]).to.have.property('name').eql('Jeread Krus');
            expect(res.body[0]).to.have.property('subscribedChannel').eql('CNET');
        });
    });

    // Test case for getting a subscriber by ID
    describe('GET /subscribers/:id', () => {
        it('should return a subscriber by ID with a 200 status', async () => {
            const createdSubscriber = await subscriberModel.create(data[0]); // Creating a subscriber to test
            const res = await chai.request(app).get(`/subscribers/${createdSubscriber._id}`);
            expect(res).to.have.status(200);
            expect(res.body).to.have.property('name').eql('Jeread Krus');
        });

        it('should return 400 if the subscriber is not found', async () => {
            const invalidId = 'abc12345'; // Example of an invalid ID
            const res = await chai.request(app).get(`/subscribers/${invalidId}`);
            expect(res).to.have.status(400);
        });
    });
})