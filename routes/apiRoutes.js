const router = require('express').Router();
let db = [] // require("../db/db.json")
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const fs = require("fs");

router.get("/notes",(req,res)=> {
db = JSON.parse(fs.readFileSync("./db/db.json","utf-8") )
console.log("getRoutes",db);
res.json(db)
}) 

router.post("/notes",(req,res) => {
    let newNotes = {
        id: Math.floor(Math.random()*100), 
        title: req.body.title,
        text: req.body.text
    }
    db.push(newNotes)
    fs.writeFileSync("./db/db.json", JSON.stringify(db), (err) => {
    if (err) throw err;
    })
    console.log("postRoutes", db)
    res.json(db)
});

router.delete("/notes/:id",(req,res) => {
    let newdb = []
    for(let i=0;i<db.length;i++){
        if(db[i].id != req.params.id){
            newdb.push(db[i])
        }
    }
 
    db = newdb
    fs.writeFileSync("./db/db.json", JSON.stringify(db), (err) => {
    if (err) throw err;
    })
    console.log("deleteRoutes", db)
    res.json(db)
});
module.exports = router;