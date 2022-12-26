const express = require("express");

const { createArt } = require("../controllers/artController");

const router = express.Router();

// create art route
router.post("/createart", createArt);

// update art route
// router.post("/updateart", updateArt);

// delete art route

module.exports = router;