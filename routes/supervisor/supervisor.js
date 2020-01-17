var express = require("express");
var router = express.Router();

var deliveryList = require("./deliveryList");
router.use("/deliveryList", deliveryList);

module.exports= router;