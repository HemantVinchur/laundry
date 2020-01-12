const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{   
    let id=request.body.customer_id;
    let query=`SELECT customer_name,society_name AS society,wings_name AS wing, flat_no , phone
               FROM customer 
               INNER JOIN society ON customer.society_id=society.society_id 
               INNER JOIN wings ON wings.society_id=society.society_id
               WHERE customer.customer_id='${id}';`;
    db.query(query,(err,res)=>{
        if (err != null) response.status(500).json({ error: err.message , success:false});
        console.log(res);
        
        if(res.length>0)
        {response.status(200).json({result:res,success:true});}
        else
        response.json({success:true,message:"customer not found"});
    });           
});
    module.exports=router;