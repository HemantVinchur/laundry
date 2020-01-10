const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let status=`UPDATE orders
    SET status = '${request.body.status}'
    WHERE
    order_id='${request.body.order_id}';`;
    db.query(status,(err,res)=>{
        if (err != null) response.status(500).json({ error: err.message , success: false});
        let date=new Date();
        let timestamp=date.getFullYear()+'-'+date.getMonth()+'-'+date.getDay()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        let subquery=`INSERT INTO time(order_id,status_id,timestamp) VALUES
                      ('${request.body.order_id}','${request.body.status}','${timestamp}')  `;
                      console.log(subquery);
                      
        db.query(subquery,(err,res)=>{
            if (err != null) response.status(500).json({ error: err.message , success: false});
            response.json({success:true});
        })    

    })
});
module.exports=router;