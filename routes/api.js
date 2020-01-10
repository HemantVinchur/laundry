var express = require("express");
var router = express.Router();

// var user = require("./user/user");
// router.use("/user", user);

var admin = require("./admin/admin");

router.use("/admin", admin);

var customer = require("./customer/customer");

router.use("/customer", customer);

module.exports = router;
