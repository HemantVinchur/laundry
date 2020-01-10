const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`SELECT total_count AS count,status,picked_date,status_desc 
            FROM orders INNER JOIN status 
            ON orders.status=status.status_id
            WHERE customer_id='${request.body.customer_id}' AND NOT status='3';`
    db.query(query,(err,res)=>
    {
        if (err != null) response.status(500).json({ error: err.message });
         response.status(200).json({result:res,success:true});   
        
    });

    });
module.exports=router;