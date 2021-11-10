const express = require("express");
const path = require ('path');
const app = express();
const db = require("./database");
app.get('/',function(req,res){
    res.sendFile(path.join(__dirname,'/index.html'));
});
app.get("/",(req,res,next)=>{
    db.execute("Select usersName From users"). then(([rows, metaData])=>{
        const data={rows};
        const parsedData = JSON.stringify(data);
        res.json(parsedData);
    })
    .catch((err)=>{
        console.log(err);
    });
});

app.listen (3000,()=>{
console.log("server is up and running on port 3000");
});