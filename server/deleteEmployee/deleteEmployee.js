let mongodb = require("mongodb");
let sambaIT =  mongodb.MongoClient;
let deleteEmployee = require("express").Router().delete("/",(req,res)=>{
    sambaIT.connect("mongodb+srv://admin:admin@employeemanagementsyste.qouys.mongodb.net/miniProjectdb?retryWrites=true&w=majority",(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db("miniProjectdb");
            db.collection("employees").deleteOne({"empId":req.body.empId},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"success"});
                }
            });
        }
    });

});
module.exports = deleteEmployee;
