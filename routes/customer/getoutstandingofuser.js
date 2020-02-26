const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { customer_id } = req.body;
  let sql = `SELECT  max(r_id) as r_id FROM records where customer_id=${customer_id}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      const r_id = result[0].r_id;
      let sql1 = `SELECT amount FROM records where r_id=${r_id}`;
      let query = db.query(sql1, (error, result) => {
        if (error) {
          console.log(error);
        } else {
          console.log(result);
          res.json({ amount: result[0].amount });
        }
      });
    }
  });
});

module.exports = router;
