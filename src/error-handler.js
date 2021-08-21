/**
 *
 * @param {Error} err
 * @param {import("express").Request} req
 * @param {import("express").Response} res
 * @param {import("express").NextFunction} next
 */
module.exports = function errorHandler(err, req, res, next) {
  res.status(500).json({
    error: e.message || "Internal Server Error"
  });
};
