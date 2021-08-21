if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
  exports.APP_ENV = "dev";
} else {
  exports.APP_ENV = "prod";
}
const {
  APP_NAME,
  APP_URL,
  APP_SECRET,
  PORT
} = process.env;

exports.APP_NAME = APP_NAME;

exports.APP_URL = APP_URL;

exports.APP_SECRET = APP_SECRET;

exports.PORT = PORT || 5000;
