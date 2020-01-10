var express = require("express");
var router = express.Router();

var signup = require("./signup");
router.use("/signup", signup);

var get=require("./get");
router.use("/get",get);

var getOutstanding=require("./getOutstanding");
router.use("/getOutstanding",getOutstanding);

var getPoints=require("./getPoints");
router.use("/getPoints",getPoints);

var getWings=require("./getWings");
router.use("/getWings",getWings);

var getHistory=require("./getHistory");
router.use("/getHistory",getHistory);

var getStatus=require("./getStatus");
router.use("/getStatus",getStatus);

var getRate=require("./getRate");
router.use("/getRate",getRate);

var updateStatus=require("./updateStatus");
router.use("/updateStatus",updateStatus);

var checkForDelivery=require("./checkForDelivery");
router.use("/checkForDelivery",checkForDelivery);

var callForLaundry=require("./callForLaundry");
router.use("/callForLaundry",callForLaundry);

// var payment=require("./payment");
// router.use("/payment",payment);

//  payment , call for laundry, call for delivery, time stamp


module.exports = router;