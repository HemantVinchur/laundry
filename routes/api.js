var express = require("express");
var router = express.Router();

var admin = require("./admin/admin");

router.use("/admin", admin);

module.exports = router;