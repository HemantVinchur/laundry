const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
let params=request.body;
let society_id=`SELECT society_id FROM society WHERE society_name='${params.society}'; `;
    db.query(society_id,function(err,result)
    {
      if (err != null) response.status(500).json({ error: err.message });
        subquery(result[0].society_id);
    });
 function subquery(society_id)
{
    society=society_id;
    let wings_id=`SELECT wings_id FROM wings WHERE wings_name='${params.wing}' AND society_id='${society}'; `;
    db.query(wings_id,function(err,result)
    {
        if (err != null) response.status(500).json({ error: err.message });
        wing=result[0].wings_id;
        final_query(society,wing);    
    });
}
function final_query(society,wing){
    let post = {
                customer_id : params.customer_id,
                customer_name : params.customer_name,
                society_id : society,
                wings_id : wing,
                flat_no : params.flat_no,
                phone : params.phone
               };
            let sql = "INSERT INTO customer SET ?";
            let query = db.query(sql, post, (err, result) => {
              if (err) {
                response.json({success:false, error:err});
              } else {
                response.status(200).json({ msg: "Customer has been added" });
              }
            });
}
});
module.exports=router;