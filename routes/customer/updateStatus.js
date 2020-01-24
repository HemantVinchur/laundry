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
        if (err != null) return response.status(500).json({ error: err.message , success: false});
        let date=new Date();
        let month=date.getMonth()+1;           
        let timestamp=date.getFullYear()+'-'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+':'+date.getSeconds();
        let subquery=`INSERT INTO time(order_id,status_id,timestamp) VALUES
                      ('${request.body.order_id}','${request.body.status}','${timestamp}')  `;
                    //   console.log(subquery); 
        db.query(subquery,(error,result)=>{
            if (error) return response.status(500).json({ error: error.message , success: false});
            return response.json({success:true,message:"timestamp recorded"});
        })
  });
});
module.exports=router;
