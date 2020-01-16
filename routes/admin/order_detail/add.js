const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { order_id, cloth_type_id, count } = req.body;
  if (order_id && cloth_type_id && count) {
    let post = {
      order_id: order_id,
      cloth_type_id: cloth_type_id,
      count: count
    };
    let sql = "INSERT INTO order_detail SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ msg: "order detail has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
