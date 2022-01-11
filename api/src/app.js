const express = require('express');

const { healthController } = require('./controller/healthController');
const { companyController } = require('./controller/companyController');

const app = express();

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use((req, res, next) => { console.log(`${req.method} ${req.originalUrl}`); next(); });

app.use('/health', healthController);

app.use('/api/v1', companyController);

module.exports = app;
