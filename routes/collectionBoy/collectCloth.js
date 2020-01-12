const express = require("express");
const db = require("../db");
const verifyToken = require("../verifyToken");
const router = express.Router();
router.post("/",verifyToken,(request,response)=>
{
    let query=`UPDATE orders SET total_count='${request.body.total_count}',status='2' 
               WHERE order_id='${request.body.order_id}'`;
    db.query(query,(err,res)=>{
        if (err != null) response.status(500).json({ error: err.message , success: false});
        if(res.affectedRows>0)
        {
            res.json({result:result,success:true});
        }
        else
        res.json({message:"No order exist",success:true});
    });
});
module.exports=router;