const router = require('express').Router();
let db = [] // require("../db/db.json")
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

module.exports = router;