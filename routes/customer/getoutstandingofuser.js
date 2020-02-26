const express = require("express");
const router = express.Router();
const db = require("../db");

router.post("/", (req, res) => {
  const { customer_id } = req.body;
  let sql = `SELECT  max(r_id) as r_id FROM records where customer_id='${customer_id}'`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      if (result[0].r_id === null) {
        return res.json({ msg: "Record doesnot exist" });
      } else {
        const r_id = result[0].r_id;
        let sql1 = `SELECT amount FROM records where r_id=${r_id}`;
        let query = db.query(sql1, (error, result) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result);
            var amount = 0;

            amount = result[0].amount;
            res.json({ amount: amount });
          }
        });
      }
    }
  });
});

module.exports = router;
