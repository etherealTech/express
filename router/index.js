const { Router } = require("express");
const router = Router();

router.all("*", 
  (req, res) => res.status(404).json({
    error: "Not Found"
  })
);

module.exports = router;
