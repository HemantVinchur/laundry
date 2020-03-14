const express = require("express");
const db = require("../db");
const router = express.Router();
const axios=require("axios");

router.post('/',(req,res)=>{
    let {ORDER_ID,MID,CHECKSUMHASH}=req.body;
    axios.post("https://securegw-stage.paytm.in/order/status",{
        ORDER_ID:ORDER_ID,
        MID:MID,
        CHECKSUMHASH:CHECKSUMHASH
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })
})
module.exports=router;