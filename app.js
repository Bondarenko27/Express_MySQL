const express = require("express");
const app = express();
const db = require("./database");
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