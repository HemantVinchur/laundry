const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let sql =
    "SELECT help_id,customerid,customer.customer_name,customer.flat_no,customer.phone,society.society_name,wings.wings_name,	helptype,helpbrief FROM help INNER JOIN customer ON customer.customer_id=help.customerid INNER JOIN society ON society.society_id=customer.society_id INNER JOIN wings ON wings.wings_id=customer.wings_id";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ helpget: result });
    }
  });
});

module.exports = router;
