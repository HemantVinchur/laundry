const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let query=``;
    db.query(query,(err,res)=>{
        if (err != null) response.status(500).json({ error: err.message , success: false});
    });
});
module.exports=router;