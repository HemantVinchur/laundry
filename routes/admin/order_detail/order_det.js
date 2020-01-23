const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");

router.get("/", verifyToken, (req, res) => {
  let sql =
    "SELECT  customer.customer_name,customer.phone,customer.flat_no,orders.picked_date,orders.total_count,society.society_name,wings.wings_name  FROM  orders, customer,society,wings where orders.customer_id=customer.customer_id && customer.society_id=society.society_id && customer.wings_id=wings.wings_id && status=5";
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ order_detailget: result });
    }
  });
});

module.exports = router;
