require('dotenv').config();

const express = require('express');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');

const passport = require('./lib/passport');
const router = require('./routes');
const swaggerJSON = require('./docs/openapi.json');

const app = express();

const port = process.env.PORT || 4000;

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());

app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.use(router);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
