const express = require("express");
const db = require("../db");
const router = express.Router();
router.post("/",(request,response)=>
{
    let params=request.body;
    console.log(params);
    
    let id=params.customer_id;
    let query=`SELECT * FROM customer WHERE customer_id='${id}';`;
    db.query(query,function(err,result){
        if (err != null) response.status(500).send({ error: err.message });
        if(result.length>0)
        subquery(result);
        else
        response.json({message:"customer not found",success:false});
    });

    function subquery(result){
        let society_id=result[0].society_id;
        let subquery=`SELECT society_name FROM society WHERE society_id='${society_id}';`;
        db.query(subquery,function(error,res){
            if (error != null) response.status(500).send({ error: error.message });
            resultset={
                result1: result,
                result2 : res
            };
            finalquery(resultset);
        });
    }
    function finalquery(resultset)
    {
         let wings_id=resultset.result1[0].wings_id;
         let subquery2=`SELECT wings_name FROM wings WHERE wings_id='${wings_id}'AND society_id='${resultset.result1[0].society_id}';`;     
         db.query(subquery2,function(err,result) {
            if (err != null) response.status(500).send({ error: err.message });
            let final = {
                customer_name: resultset.result1[0].customer_name,
                society: resultset.result2[0].society_name,
                wing:result[0].wings_name,
                flat_no: resultset.result1[0].flat_no,
                phone:resultset.result1[0].phone
              };
              response.status(200).json(final);

         });
         
    }
});
    module.exports=router;
         
