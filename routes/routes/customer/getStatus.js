const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`SELECT total_count AS count,status,picked_date,status_desc,timestamp
               FROM orders INNER JOIN status ON orders.status=status.status_id
               INNER JOIN time ON orders.order_id=time.order_id
               WHERE orders.customer_id='${request.body.customer_id}' AND NOT orders.status='14'`
    db.query(query,(err,res)=>
    {
        if (err != null) response.status(500).json({ error: err.message });
        if(res.length>0){
         response.status(200).json({result:res,success:true});   
        }
        else{
            response.json({message:"No Ongoing Order",success:true});
        }
        
    });

    });
module.exports=router;
