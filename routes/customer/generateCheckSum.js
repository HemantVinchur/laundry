const express = require("express");
const db = require("../db");
const router = express.Router();
const paytm_checksum=require("../paytm/checksum")
require('dotenv').config();
console.log(process.env.MID)
router.post("/generateCheckSum",(req,res)=>{
    let {ORDER_ID,CUST_ID,TXN_AMOUNT,MOBILE_NO}=req.body;
    let CALLBACK_URL="";
    let MID=process.env.MID;
    let WEBSITE=process.env.WEBSITE;
    let CHANNEL_ID=process.env.CHANNEL_ID;
    let INDUSTRY_TYPE_ID=process.env.INDUSTRY_TYPE_ID;
    let MERCHANT_KEY=process.env.MERCHANT_KEY;
    let paramArray={};
    paramArray['MID']=MID;
    paramArray['ORDER_ID']=ORDER_ID;
    paramArray['CUST_ID']=CUST_ID;
    paramArray['INDUSTRY_TYPE_ID']=INDUSTRY_TYPE_ID;
    paramArray['CHANNEL_ID']=CHANNEL_ID;
    paramArray['TXN_AMOUNT']=TXN_AMOUNT;
    paramArray['WEBSITE']=WEBSITE;
    paramArray['CALLBACK_URL']=CALLBACK_URL
    paramArray['MOBILE_NO']=MOBILE_NO
    paytm_checksum.genchecksum(paramArray,MERCHANT_KEY,(err,checksum)=>{
            if(err)
            {
                console.log(err);
                res.status(500).json({success:false,msg:"Some Problem in checksum generation"})
            }
            else
            {
              console.log("Checksum",checksum);
              res.json({success:true,checksum_val:checksum})
            }
    })
})  