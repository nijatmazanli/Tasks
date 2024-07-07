const router = require("express").Router()
const { log } = require("console");
const fs = require("fs");

const readData = ()=>{
    return JSON.parse(fs.readFileSync("./data/basket.json"));
}
const writeData = (data)=>{
    fs.writeFileSync("./data/basket.json", JSON.stringify(data));
}


router.get("/", (req, res)=>{
    const basket = readData();
    res.render("basket", {basket})
})

router.delete("/:id", (req, res)=>{
    const basket = readData()
    
    const index = basket.findIndex(p => p.id == req.params.id)
    if(index !== -1){
        const deletedProduct = basket.splice(index, 1)
        writeData(basket)
        res.json(deletedProduct);
    }
    else{
        res.status(404).json({message: "Product not found"})
    }
})
module.exports = router;