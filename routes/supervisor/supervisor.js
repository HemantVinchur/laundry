var express = require("express");
var router = express.Router();

// var deliveryList = require("./deliveryList");
// router.use("/deliveryList", deliveryList);

var operations = require("./operations");
router.use("/operations", operations);


module.exports= router;
