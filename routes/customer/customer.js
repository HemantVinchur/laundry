var express = require("express");
var router = express.Router();
//done
var signup = require("./signup");
router.use("/signup", signup);
//done
var get=require("./get");
router.use("/get",get);
//done
var getOutstanding=require("./getOutstanding");
router.use("/getOutstanding",getOutstanding);
//not done
// var getPoints=require("./getPoints");
// router.use("/getPoints",getPoints);
//done
var getWings=require("./getWings");
router.use("/getWings",getWings);
//done
var getSociety=require("./getSociety");
router.use("/getSociety",getSociety);
//done
var getHistory=require("./getHistory");
router.use("/getHistory",getHistory);
//done
var getStatus=require("./getStatus");
router.use("/getStatus",getStatus);
//done
var getRate=require("./getRate");
router.use("/getRate",getRate);
//done
var updateStatus=require("./updateStatus");
router.use("/updateStatus",updateStatus);
//done
var checkForDelivery=require("./checkForDelivery");
router.use("/checkForDelivery",checkForDelivery);
//done
var callForLaundry=require("./callForLaundry");
router.use("/callForLaundry",callForLaundry);
//not done
var payment=require("./payment");
router.use("/payment",payment);

module.exports = router;