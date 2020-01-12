const express = require("express");
const router = express.Router();
const db = require("../../../db");
const verifyToken = require("../../verifyToken");
router.put("/:map_sup_id", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let { admin_id, centre_id, date_to } = req.body;
  if (admin_id && centre_id && date_to) {
    let update = {
      admin_id: admin_id,
      centre_id: centre_id,
      date_to: date_to
    };
    let sql = `UPDATE mapping_supervisor SET ?  WHERE map_sup_id='${req.params.map_sup_id}'`;
    let query = db.query(sql, update, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json({ msg: "Updates done in mapping_supervisor" });
      }
    });
  } else {
    res.json({ msg: "All fields are required" });
  }
});

module.exports = router;
