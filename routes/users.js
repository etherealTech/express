const { Router, json } = require("express");
const router = Router();

router.use(json());

router.post("/", ({ body }, res) => {
  res.statusCode = 201;
  res.send(body);
});

module.exports = router;
