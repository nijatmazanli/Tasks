const router = require("express").Router()
const fs = require("fs");

const readData = ()=>{
    return JSON.parse(fs.readFileSync("./data/products.json"));
}


const writeData = (data)=>{
    fs.writeFileSync("./data/products.json", JSON.stringify(data));
}
const writeDatabasket = (data)=>{
    fs.writeFileSync("./data/basket.json", JSON.stringify(data));
}
const writeDataFavourites = (data)=>{
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
}


const readFavorites = ()=>{
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
}
const addToFavorite = (data)=>{
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
}
const readBasket = ()=>{
    return JSON.parse(fs.readFileSync("./data/basket.json"));
}
const addToBasket = (data)=>{
    fs.writeFileSync("./data/basket.json", JSON.stringify(data));
}

router.get("/", (req, res)=>{
    const products = readData();
    res.render("products", {products});
})

router.post("/", (req, res)=>{
    const products = readData();
    const uniqueId = new Date()
    const date = new Date()
    const newProduct = {
        id: uniqueId.getTime(),
        createdAt: date,
        updatedAt: date,
        ...req.body,
    }
    products.push(newProduct);
    writeData(products);
    res.status(201).json(newProduct);
})

router.delete("/:id", (req, res)=>{
    const products = readData();
    const basket = readBasket();
    const favorites = readFavorites();

    const index = products.findIndex(p => p.id == req.params.id)
    const index_basket = basket.findIndex(p => p.id == req.params.id)
    const index_favorites = favorites.findIndex(p => p.id == req.params.id)
    console.log(index,index_basket,index_favorites)
    if(index !== -1){
        const deletedProduct = products.splice(index, 1)
        writeData(products)
        console.log(products);
        res.json(deletedProduct);
    }

    if(index_favorites !== -1){
        const deletedProductf = favorites.splice(index, 1)
        console.log(deletedProductf);
        writeDataFavourites(favorites)
        res.json(deletedProductf);
    }
    if(index_basket !== -1){
        const deletedProductb = basket.splice(index, 1)
        writeDatabasket(basket)
        res.json(deletedProductb);
    }
    else{
        res.status(404).json({message: "Product not found"})
    }
})

router.get("/add/favorites/:id", (req, res)=>{
    const products = readData();
    const favorites = readFavorites()
    const index = products.findIndex(p => p.id == req.params.id)
    if(index !== -1){
        const foundProduct = products.splice(index, 1)
        favorites.push(foundProduct[0])
        addToFavorite(favorites)
        res.json(foundProduct);
    }
    else{
        res.status(404).json({message: "Product not found"})
    }
})
router.get("/add/basket/:id", (req, res)=>{
    const products = readData();
    const basket = readBasket()
    const index = products.findIndex(p => p.id == req.params.id)
    if(index !== -1){
        const foundProduct = products.splice(index, 1)
        basket.push(foundProduct[0])
        addToBasket(basket)
        res.json(foundProduct);
    }
    else{
        res.status(404).json({message: "Product not found"})
    }
})


module.exports = router;