var express = require("express");
var router = express.Router();

var callsForCollection = require("./callsForCollection");
router.use("/callsForCollection", callsForCollection);

var callsForDelivery = require("./callsForDelivery");
router.use("/callsForDelivery", callsForDelivery);

var callsForDelivery = require("./callsForDelivery");
router.use("/callsForDelivery", callsForDelivery);

var common30 = require("./common30");
router.use("/common30", common30);

var collectCloth=require("./collectCloth");
router.use("/collectCloth", collectCloth);


var login=require("./login");
router.use("/login", login);


module.exports=router;