const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`SELECT cloth_type,rate 
               FROM rate INNER JOIN cloth_type
               ON rate.cloth_type_id=cloth_type.cloth_type_id
               WHERE society_id in (select society_id from customer where customer_id=${request.body.customer_id})`;
    db.query(query,(err,res)=>{
        if (err != null) response.status(500).json({ error: err.message, success: false });
        if(res.length>0){response.status(200).json({result:res, success: true});}
        else {
            response.json({success:true,message:"Rate Not Updated For Your Society"});
        }
        
    });
});
module.exports=router;
