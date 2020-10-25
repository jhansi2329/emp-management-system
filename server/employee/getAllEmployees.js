let mongodb = require("mongodb");
let sambaIT = mongodb.MongoClient;

let employees = require("express").Router().get("/",(req,res)=>{
    sambaIT.connect("mongodb+srv://admin:admin@employeemanagementsyste.qouys.mongodb.net/miniProjectdb?retryWrites=true&w=majority",(err,client)=>{
        if(err) throw err;
        else{
            let db = client.db("miniProjectdb");
            db.collection("employees").find().toArray((err,array)=>{
                if (err) throw err;
                else{
                    res.send(array);
                }
            });
        }
    });

});

module.exports = employees;
