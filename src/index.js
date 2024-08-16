// Import required modules
const express = require('express')
const dotenv = require('dotenv')
const app = require('./app.js')
const mongoose = require('mongoose')
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs')

// Load environment variables
dotenv.config()

const port = process.env.PORT || 3001

// Middleware for parsing request bodies and serving static files
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('public'))

// Set up Swagger UI for API documentation
const swaggerDocument = YAML.load('./swagger.yaml')
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))


// Connect to DATABASE
const DATABASE_URL = process.env.DATABASE_URL;
mongoose.connect(DATABASE_URL,{ useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection
db.on('error', (err) => console.log(err))
db.once('open', () => console.log('connected to database'))

// Start Server
app.listen(port, () => console.log(`App listening on port ${port}!`))