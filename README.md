# Subscribers-Mongo-Node-main

A simple API built with Node.js and Express that allows you to manage and fetch subscriber details from a MongoDB database. It provides endpoints to retrieve all subscribers, obtain subscriber names, or access details for a specific subscriber by their ID.

## Technologies/Languages Used

| ![Node.js Logo](https://img.shields.io/badge/Node.js-%E2%9C%94-brightgreen) | ![Express](https://img.shields.io/badge/Express-%E2%9C%94-blue) | ![MongoDB](https://img.shields.io/badge/MongoDB-%E2%9C%94-green) | ![Mocha](https://img.shields.io/badge/Mocha-%E2%9C%94-yellowgreen) | ![Chai](https://img.shields.io/badge/Chai-%E2%9C%94-red) | ![Swagger](https://img.shields.io/badge/Swagger-%E2%9C%94-blueviolet) |
|:--:|:--:|:--:|:--:|:--:|:--:|


- **Node.js** - JavaScript runtime used for building the server-side application.
- **Express** - Web application framework for Node.js, used to build the API.
- **MongoDB** - NoSQL database used for storing subscriber data.
- **Mongoose** - MongoDB object modeling tool for Node.js.
- **Mocha** - Test framework used for running tests.
- **Chai** - Assertion library used in conjunction with Mocha for testing.
- **Swagger UI** - Tool for API documentation and testing.

## Installation and Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/Sourabh250/Subscribers-Mongo-Node-main.git
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file at the root and add the following:
    ```plaintext
    PORT=3000
    DATABASE_URL=your_database_connection_string
    ```

## Usage

To start the server, run:
```bash
npm start
```

This will start the Express server at http://localhost:3000.

## API Endpoints
Get all subscribers
```
GET /subscribers
```
Get subscriber names
```
GET /subscribers/names
```
Get specific subscriber by ID
```
GET /subscribers/:id
```

## Testing
To run the tests, make sure you have Mocha and Chai installed. Then, run the following command:
```
npm test
```
The tests will execute using Mocha and Chai. Test results will be generated and saved in the mochawesome-report folder

## Deployment
For deployment, follow these steps:

#### Prepare your environment:
Ensure that environment variables are set and the database is accessible.
#### Deploy to your preferred hosting service:
For example, you can use platforms like Heroku, AWS, or DigitalOcean.
#### Set up deployment scripts if necessary:
Configure deployment settings according to your hosting provider's guidelines.

http://localhost:3000/

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
This project is licensed under the MIT License - see the LICENSE.md file for details.