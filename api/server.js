const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const configureRoutes = require('../config/routes.js');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

// TEST ROUTE
server.get('/', (req, res) => {
    res.send("Yup, the server is working (second attempt)");
});

configureRoutes(server);

module.exports = server;
