const express = require("express")
const app = express()
const port = 4000

app.get("/",(req,res) => {
    res.send("helelelele")
    console.log(req.params)
})

app.listen(port, () =>{
    console.log("Dsdsd");
})