const express = require("express");

const { createArt, getArtProjects } = require("../controllers/artController");

const router = express.Router();

// get art projects
router.get("/getart", getArtProjects);

// create art route
router.post("/createart", createArt);

// update art route
// router.post("/updateart", updateArt);

// delete art route

module.exports = router;