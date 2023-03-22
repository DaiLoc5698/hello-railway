const router = require("express").Router();

//UPDATE
router.put("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      console.log('>>>>>>>>>>>>>')
      res.status(200).json('updatedUser');
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(401).json("You can update only your account!");
  }
});

//DELETE
router.delete("/:id", async (req, res) => {
  if (req.body.userId === req.params.id) {
    try {
      res.status(200).json("User has been deleted...");
    } catch (err) {
      res.status(404).json("User not found!");
    }
  } else {
    res.status(401).json("You can delete only your account!");
  }
});

// GET USER
router.get("/:id",  async (req, res) => {
  try {
    res.status(200).json('others');
  } catch (err) {
    console.log(err);
  }
})

module.exports = router;