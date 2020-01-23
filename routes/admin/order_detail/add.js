const express = require("express");
const router = express.Router();
const db = require("../../db");
const verifyToken = require("../verifyToken");
router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  // let { order_id, cloth_type_id, count } = req.body;
  // if (order_id && cloth_type_id && count) {
    //     let post = {
    //       order_id: order_id,
    //       cloth_type_id: cloth_type_id,
    //       count: count
    //     };
    //     let sql = "INSERT INTO order_detail SET ?";
    //     let query = db.query(sql, post, (err, result) => {
    let post = `INSERT into order_detail(order_id,cloth_type_id,count) values ?`
    pool.query(post, [req.body.items.map(item => [req.body.order_id, item.cloth_id, item.count])])
      .then((postResult) => {
        if (postResult.affectedRows > 0) {
          let orderQuery = `update orders set status=6 where order_id='${req.body.order_id}' `
          let timequery = `insert into time(order_id,status_id,timestamp) values(${req.body.order_id},6,timeNow())`
          pool.query(orderQuery)
        }
        else {
          res.status(200).json({ msg: "no detail has been added" })
        }
        if (err) {
          console.log(err);
        } else {
          res.status(200).json({ msg: "order detail has been added" });
        }
      });
  }); 

module.exports = router;


