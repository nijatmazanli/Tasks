const router = require("express").Router()
const fs = require("fs");

const readData = ()=>{
    return JSON.parse(fs.readFileSync("./data/users.json"));
}
const writeData = (data)=>{
    fs.writeFileSync("./data/users.json", JSON.stringify(data));
}



router.get("/", (req, res)=>{
    const users = readData();
    res.render("users", {users});
})

router.post("/", (req, res)=>{
    const users = readData();
    const uniqueId = new Date()
    const date = new Date()
    const newUser = {
        id: uniqueId.getTime(),
        createdAt: date,
        updatedAt: date,
        ...req.body,
    }
    users.push(newUser);
    writeData(users);
    res.status(201).json(newUser);
})

router.delete("/:id", (req, res)=>{
    const users = readData();
    const index = users.findIndex(u => u.id == req.params.id)
    if(index !== -1){
        const deletedUser = users.splice(index, 1)
        writeData(users)
        res.json(deletedUser);
    }
    else{
        res.status(404).json({message: "User not found"})
    }
})


module.exports = router;