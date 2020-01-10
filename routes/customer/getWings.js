const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let wings=`SELECT wings_name FROM wings WHERE society_id='${request.body.society_id}';`;
    db.query(wings,(err,res)=>
    {
        if (err != null) response.status(500).json({ error: err.message });
        // console.log(JSON.parse(JSON.stringify(res)));
        response.status(200).json({result:res})
    });
});
module.exports=router;