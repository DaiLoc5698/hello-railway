const router = require("express").Router();

//REGISTER
router.post("/register", async (req, res) => {
    try {
        res.status(200).json('user');
    } catch (err) {
        res.status(500).json(err);
    }
});

// LOGIN
router.post("/login", async (req, res)=> {
    try {
        res.status(200).json('others') /// id there is any user according to the database ten send status 200 is successful
    }catch (err) {
        res.status(500).json(err);
    }
})
module.exports = router;