const express = require("express");
const path = require ('path');
const app = express();
const db = require("./database");
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.listen (3000,()=>{
console.log("server is up and running on port 3000");
});