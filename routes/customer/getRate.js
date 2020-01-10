const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=`SELECT cloth_type,rate 
               FROM rate INNER JOIN cloth_type
               ON rate.cloth_type_id=cloth_type.cloth_type_id
               WHERE society_id='${request.body.society_id}';`;
    db.query(query,(err,res)=>{
        if (err != null) response.status(500).json({ error: err.message, success: false });
        response.status(200).json({result:res, success: true});
    });
});
module.exports=router;