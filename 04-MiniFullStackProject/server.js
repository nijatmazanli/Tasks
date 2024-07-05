const express = require("express")
const fs = require('fs');
const ejs = require("ejs")

let data1 = fs.readFileSync('products.json');
let products = JSON.parse(data1);


const app = express()
app.set("view engine", "ejs")
app.use(express.json())
app.use(express.urlencoded())

// PRODUCTS ROUTES
app.get("/products", (req, res)=>{
    const data = products
    if(data){    
        res.render("products", {products})


    }else{
        res.status(404).json({
            "status": 404,
            "error": "Products not found!"
        })
    }

})

app.post("/product/new", (req, res)=>{
    const data = req.body
    const id = new Date()
    const new_product = {
        "id": id.getTime(),
        "name": data.name,
        "desc": data.desc,
        "price": data.price,
        "category": data.category,
        "stock": data.stock,
        "imageUrl": data.imageUrl,
        "createdAt": new Date(),
        "updatedAt": new Date()
    }

    products.products.push(new_product); 

    let updatedData = JSON.stringify(products, null, 2);
    // let products = updatedData
    fs.writeFileSync('products.json', updatedData);
    res.render("products", {products})
})

app.get("/create", (req, res)=>{
    res.render("index")
})

app.delete("/product/:id", (req, res)=>{

})


















app.get("/product/:id", (req, res)=>{
    res.send("spesific product")
})





app.put("/product/:id", (req, res)=>{
    res.send("put spesific product")
})

app.patch("/product/:id", (req, res)=>{
    res.send("patch spesific product")
})

// USERS ROUTES
app.get("/users", (req, res)=>{
    res.send("users")
})

app.get("/user/:id", (req, res)=>{
    res.send("spesific user")
})

app.delete("/user/:id", (req, res)=>{
    res.send("delete spesific user")
})

app.post("/user/new", (req, res)=>{
    res.send("create user")
})

app.put("/user/:id", (req, res)=>{
    res.send("put spesific user")
})

app.patch("/user/:id", (req, res)=>{
    res.send("patch spesific user")
})

const PORT = 3000

app.listen(PORT, ()=>{
    // console.log(App is running on port: ${PORT})
})