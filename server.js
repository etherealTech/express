const { APP_ENV, PORT } = require("./config");
const express = require("express");
const router = require("./router");
const errorHandler = require("./src/error-handler");
const app = express();

app.use(express.json());
app.use(errorHandler);
app.use(router);

// 404 - not found
app.all("*",
  (req, res) => res.status(404).send("Not Found")
);

app.listen(PORT, 
  () => console.log("app is running on http://localhost:%d", PORT)
);
