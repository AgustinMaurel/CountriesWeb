const express = require('express');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const routes = require('./routes/index');
const errorHandler = require('./middlewares/errorHandler');
const setHeaders = require('./middlewares/headers');

require('./db.js');

const server = express();

server.name = 'API';

server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
server.use(setHeaders)

server.use('/api', routes);

// Error catching endware.
server.use(errorHandler)

module.exports = server;
