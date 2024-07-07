const router = require("express").Router()
const fs = require("fs");

const readData = ()=>{
    return JSON.parse(fs.readFileSync("./data/favorites.json"));
}
const writeData = (data)=>{
    fs.writeFileSync("./data/favorites.json", JSON.stringify(data));
}


router.get("/", (req, res)=>{
    const favorites = readData();
    res.render("favorites", {favorites})
})
router.delete("/del/:id", (req, res)=>{
    const favorites = readData();
    const index = favorites.findIndex(u => u.id == req.params.id)
    if(index !== -1){
        const deletedUser = favorites.splice(index, 1)
        writeData(favorites)
        res.json(deletedUser);
    }
    else{
        res.status(404).json({message: "User not found"})
    }
})
module.exports = router;