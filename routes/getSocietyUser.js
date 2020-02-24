const express = require("express");
const router = express.Router();
const db = require("../db");
const verifyToken = require("./verifyToken");

router.get("/:collid", verifyToken, (req, res) => {
  var collid = req.params.collid;
  let sql = `SELECT customer.customer_id,customer.customer_name from customer INNER JOIN society ON society.society_id=customer.society_id INNER JOIN mapping_collectionboy ON mapping_collectionboy.centre_id=society.centre_id WHERE admin_id=${collid} `;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ getsocietyUsers: result });
    }
  });
});

module.exports = router;
