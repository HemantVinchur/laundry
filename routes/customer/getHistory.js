const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`SELECT total_count,picked_date,delivery_date,cloth_type,count,amount,end_date 
    FROM orders 
    INNER JOIN order_detail ON orders.order_id=order_detail.order_id 
    INNER JOIN payment ON orders.order_id=payment.order_id 
    INNER JOIN cloth_type ON order_detail.cloth_type_id=cloth_type.cloth_type_id 
    WHERE orders.customer_id='${request.body.customer_id}' AND payment.status='14'; `;
    db.query(query,(err,res)=>{
        if (err != null) response.status(500).json({ error: err.message , success: false});
        response.status(200).json({result:res,success:true});
        //slice the string of all the data type to display date using inbuilt java functions in all programs
    });
});
module.exports=router;