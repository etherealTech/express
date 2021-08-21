const { APP_ENV, PORT } = require("./config");
const express = require("express");
const router = require("./router");
const errorHandler = require("./src/error-handler");
const app = express();

if (APP_ENV === "dev") {
  app.use(require("morgan")("dev"));
}

app.use(express.json());

app.use(router);

app.use(errorHandler);

app.listen(PORT, 
  () => console.log("app is running on http://localhost:%d", PORT)
);
