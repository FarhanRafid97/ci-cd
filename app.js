require("dotenv").config();

const express = require("express");
const swaggerUI = require("swagger-ui-express");

const router = require("./routes");
const swaggerJSON = require("./docs/openapi.json");

const app = express();

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerJSON));

app.use(router);

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
