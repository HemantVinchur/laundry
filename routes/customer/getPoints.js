const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    //take amount of the last completed order (completion specified by putting end date in db)
    let points=`SELECT amount AS Amount FROM payment WHERE customer_id='${request.body.customer_id}' 
    AND end_date='(SELECT MAX(end_date) FROM payment WHERE customer_id=${request.body.customer_id});'`;
    db.query(points,(err,res)=>{
        if (err != null) response.status(500).json({ error: err.message, success:false });
        console.log(res);
        let points=(res[0].Amount)*0.10;
        // response.send("yo");
        response.status(200).json({result:points,success:true});

    });
});
module.exports=router;