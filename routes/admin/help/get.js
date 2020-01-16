const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let sql = "SELECT help_id,customerid,	helptype,helpbrief FROM help";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ helpget: result });
    }
  });
});

module.exports = router;
