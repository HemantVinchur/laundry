const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let outstanding=`SELECT SUM(amount) AS outstanding FROM payment
     WHERE customer_id='${request.body.customer_id}' AND 
     NOT status='14';`;
    db.query(outstanding,(err,res)=>
    {
        if (err != null) response.status(500).json({ error: err.message, success:false });
        response.status(200).json({result : res[0].outstanding, success:true});
    });
});
module.exports=router;