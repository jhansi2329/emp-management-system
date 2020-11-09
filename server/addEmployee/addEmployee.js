const { response } = require("express");
let mongodb = require("mongodb");
let sambaIT = mongodb.MongoClient;
let addEmployee = require("express").Router().post("/",(req,res)=>{
       
        
        var newRecord = {
            "Name":req.body.Name,
            "Age":req.body.Age,
            "empId":req.body.empId,
            "Salary":req.body.Salary,
            "Department":req.body.Department,
            "DOB":req.body.DOB,
            "Gender":req.body.Gender,
            "languages":req.body.languages
        };
        
        sambaIT.connect("mongodb+srv://admin:admin@employeemanagementsyste.qouys.mongodb.net/miniProjectdb?retryWrites=true&w=majority",(err,client)=>{
            if(err) throw err;
            else {
                let db = client.db("miniProjectdb");
                const query = { _id: "empId" };
                const update = {$inc: {
                    sequence_value: 1
                  }};
                const options = { returnOriginal:false};
                  db.collection("counters").findOneAndUpdate(query, update, options,function(err,record){
                        if(record){
                            console.log(newRecord.empId+"(((((");
                            newRecord.empId="Emp_"+record.value.sequence_value;
                            console.log(newRecord.empId);
                            db.collection("employees").insertOne(newRecord,(err,result)=>{
                                if (err) throw err;
                                else{
                                     res.send({insertedRec : result.ops[0],insert:"success"});
                                     
                                     
                                     
                                }
                            })
                        }
                  });
                                                                              
              
                
                             
                
            }
        });
});
module.exports= addEmployee;