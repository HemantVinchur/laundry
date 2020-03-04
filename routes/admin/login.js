const express = require("express");
const jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");
const dotenv = require("dotenv");

const db = require("../db");

dotenv.config();
const router = express.Router();
//This is used to login the admin with email and password
router.post("/", (req, res) => {
  let { mobile_no, password } = req.body;
  if (mobile_no && password) {
    let sql = `SELECT admin_id,password,admin_type from admin where mobile_no='${mobile_no}'`;
    db.query(sql, function(error, result, fields) {
      if (error) {
        console.log(error);
        return res.json({
          status: false,
          message: "there was some error with query"
        });
      }
      if (result.length > 0) {
        if (result[0].admin_id > 0) {
          bcrypt.compare(password, result[0].password, function(err, res1) {
            // res === true
            if (res1) {
              const token = jwt.sign(
                {
                  admin_id: result[0].admin_id,
                  mobile_no: mobile_no,
                  admin_type: result[0].admin_type
                },
                "TOKENSECRETFORADMIN"
              );
              res.header("auth-token", token).json({ tokenkey: token,type:result[0].admin_type,success:true });
            } else {
              res.json({ success:false,msg: "Incorrect Username/Password" });
            }
          });
          //Create and assign  a token
        } else {
          res.json({ msg: "mobile no  doesnot exist" });
        }
	  }
	  else{
		res.json({ success:false,msg: "Incorrect Username/Password" });
	  }
    });
  } else {
    res.json({ msg: "Enter all fields" });
  }
});

module.exports = router;
