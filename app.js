const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

// This will be our application entry. We'll setup our server here.
const http = require('http');

// Set up the express app
const app = require('./utils/express');

// Setup a default catch-all route that sends back a welcome message in JSON format.
app.get('/', (req, res) => res.status(200).send({
    message: 'Welcome to the FunkoBase API.',
}));

const port = parseInt(process.env.PORT, 10) || 8080;

app.set('port', port);

const server = http.createServer(app);

server.listen(port);

module.exports = app;