const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { cloth_type_id, society_id, rate } = req.body;
  if (cloth_type_id && society_id && rate) {
    let post = {
      cloth_type_id: cloth_type_id,
      society_id: society_id,
      rate: rate
    };
    let sql = "INSERT INTO rate SET ?";
    let query = db.query(sql, post, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({ msg: "Rate has been added" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
