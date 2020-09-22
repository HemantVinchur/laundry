var express = require("express");
var router = express.Router();


var signup = require("./signup");
router.use("/signup", signup);

var login = require("./login");
router.use("/login", login);

module.exports = router;