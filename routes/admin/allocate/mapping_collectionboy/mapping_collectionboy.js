var express = require("express");
var router = express.Router();

var add = require("./add");
router.use("/add", add);

var update = require("./update");
router.use("/update", update);

module.exports = router;
