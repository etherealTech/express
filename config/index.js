const {
  NODE_ENV,
  APP_NAME,
  APP_URL,
  APP_SECRET,
  PORT
} = process.env;

exports.APP_ENV = NODE_ENV === "production" ? "prod" : "dev";

exports.APP_NAME = APP_NAME;

exports.APP_URL = APP_URL;

exports.APP_SECRET = APP_SECRET;

exports.PORT = PORT || 3000;
