const express = require("express");

const router = express.Router();


router.get("/", (req, res) => {
//   res.send("You made a get request.");

    res.send("name : Khayam")
});

router.post("/items", (req, res) => {
  res.send("You made a post request.");
});

router.put("/items/:id", (req, res) => {
  res.send("You made a put request.");
});

router.delete("/items/:id", (req, res) => {
  res.send("You made a delete request.");
});


module.exports = router;