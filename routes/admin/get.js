const express = require("express");
const dotenv = require("dotenv");
const db = require("../db");
dotenv.config();
const verifyToken = require("./verifyToken");
const router = express.Router();


router.post("/", verifyToken, (req, res) => {
  if (req.decoded.admin_type != "admin") {
    return res.json({ msg: "Unauthorized" });
  }
  let getAdminQuery=`select name,mobile_no,address_1,address_2,city,admin_type from admin where admin_id in (${req.body.admin_id.toString()})`
  db.query(getAdminQuery,(err,result)=>{
    if(err)
    {
      console.log(error);
       return res.json({success:false,error:"Some Error Occured"});
    }
    else{
      if(result.length>0)
        {
      return res.json({success:true,result:result});
       }
    else{
      return res.json({success:true,msg:"No admin found"});
      }
    }
  })
});
module.exports = router;
