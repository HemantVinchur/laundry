var express = require("express");
var router = express.Router();

var callsForCollection = require("./callsForCollection");
router.use("/callsForCollection", callsForCollection);

var callsForDelivery = require("./callsForDelivery");
router.use("/callsForDelivery", callsForDelivery);

var callsForDelivery = require("./callsForDelivery");
router.use("/callsForDelivery", callsForDelivery);

var moreThan30 = require("./moreThan30");
router.use("/moreThan30", moreThan30);

var collectCloth=require("./collectCloth");
router.use("/collectCloth", collectCloth);


var login=require("./login");
router.use("/login", login);


module.exports=router;