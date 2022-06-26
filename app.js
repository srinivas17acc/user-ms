const express = require('express');
const config = require('./src/config');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const routes = require('./src/routes/');


const app = express();

app.use(helmet());
app.use(express.json());  
app.use(express.urlencoded({ extended: true }));  
app.use(mongoSanitize());

app.use('/map', routes);

module.exports = app;