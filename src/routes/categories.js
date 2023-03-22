const router = require("express").Router();

router.post("/", async (req, res) => {
    try{
        res.status(200).json('saveCategory')
    } catch(err){
        res.status(404).json("wrong credentials")
    }
})

router.get("/", async (req, res) => {
    try{
        res.status(200).json('cats')
    } catch(err){
        res.status(500).json("wrong credentials")
    }
})

module.exports = router;