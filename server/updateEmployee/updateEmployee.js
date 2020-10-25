let mongodb = require("mongodb");
let sambaIT = mongodb.MongoClient;
let updateEmployee = require("express").Router().put("/",(req,res)=>{
    let basedOnProperty = {"empId":req.body.empId}; 
    let newProperties = {$set:{"Name":req.body.Name,
                                "Age":req.body.Age,
                                "Salary":req.body.Salary,
                                "Department":req.body.Department,
                                "DOB":req.body.DOB,
                                "Gender":req.body.Gender,
                                "languages":req.body.languages}};
    sambaIT.connect("mongodb+srv://admin:admin@employeemanagementsyste.qouys.mongodb.net/miniProjectdb?retryWrites=true&w=majority",(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db("miniProjectdb");
            db.collection("employees").updateOne(basedOnProperty,newProperties,(err,result)=>{
                if(err) throw err;
                else{
                    res.send({update : "success"});
                }
            });
        }
    });
});
module.exports = updateEmployee;