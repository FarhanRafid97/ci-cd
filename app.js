require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

const passport = require('./lib/passport');
const router = require('./routes');
const swaggerJSON = require('./docs/openapi.json');

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.use(router);

module.exports = app;
