require("dotenv").config()
const fs = require("fs")
const db = require("./connect")


const sql = fs.readFileSync(__dirname+ '/setup.sql').toString()
db.query(sql)
  .then((data) =>{
    db.end();
    console.log("Travel Japan is DB is now connected")
  })
  .catch(error => console.log(error))