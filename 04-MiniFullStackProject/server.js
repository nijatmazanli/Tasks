const express = require("express")
const app = express()
const port = 4000
const fs = require("fs")

let product_data = fs.readFileSync("./products.json")
let products = JSON.parse(product_data)
console.log(products)

let user_data = fs.readFileSync("./users.json")
let users = JSON.parse(user_data)
console.log(users)
//<------------ Products ---------->

app.get("/products", (req,res) =>{
    res.send("products")
})

app.get("/product/:id", (req,res)=> {
    res.send("product ;ist")
    res.send(`Product name ${products}`)
})

app.delete("/product/:id", (req,res)=> {
    res.send("delete product")
})

app.post("/product/new",(req,res)=>{
    res.send("add product")
})

app.put("/product/:id",(req,res)=>{
    res.send("put specific product")
})


app.patch("/product/:id", (req,res)=> {
    res.send("patch product")
})


//<------------ Users ---------->
app.get("/users", (req,res) =>{
    res.send("users")
})


app.get("/user/:id", (req,res)=> {
    res.send("product ;ist")
})

app.delete("/user/:id", (req,res)=> {
    res.send("delete product")
})

app.post("/user/new",(req,res)=>{
    res.send("add product")
})

app.put("/user/:id",(req,res)=>{
    res.send("put specific product")
})


app.patch("/user/:id", (req,res)=> {
    res.send("patch product")
})



app.listen(port,() =>{
    console.log("Fddfd");
})
