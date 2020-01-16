var express = require("express");
var router = express.Router();

// var add = require("./add");
// router.use("/add", add);

var signup = require("./signup");
router.use("/signup", signup);

var login = require("./login");
router.use("/login", login);

var centre = require("./centre/centre");
router.use("/centre", centre);

var society = require("./society/society");
router.use("/society", society);

var wings = require("./wings/wings");
router.use("/wings", wings);

var mapping_supervisor = require("./allocate/mapping_supervisor/mapping_supervisor");
router.use("/mapping_supervisor", mapping_supervisor);

var mapping_collectionboy = require("./allocate/mapping_collectionboy/mapping_collectionboy");
router.use("/mapping_collectionboy", mapping_collectionboy);

var rate = require("./rate/rate");
router.use("/rate", rate);

var cloth_type = require("./cloth_type/cloth_type");
router.use("/cloth_type", cloth_type);

var order_detail = require("./order_detail/order_detail");
router.use("/order_detail", order_detail);

var help = require("./help/help");
router.use("/help", help);


module.exports = router;
