const express = require("express");

const { createArt, getArtProjects, getAllProjects } = require("../controllers/artController");

const router = express.Router();

router.get("/", getAllProjects);

// get art projects
router.get("/getart", getArtProjects);

// create art route
router.post("/createart", createArt);

// update art route
// router.post("/updateart", updateArt);

// delete art route

module.exports = router;