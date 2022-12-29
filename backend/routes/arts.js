const express = require("express");

const { createArt, getArtProjects, getAllProjects, getArtistCategory, updateLikeCount, getOneProject } = require("../controllers/artController");

const router = express.Router();

// get all art projects from artist
router.get("/", getAllProjects);

// get all art projects from artist based on category
router.get("/getartcategory", getArtistCategory);

// get art projects from artist based on category and year
router.get("/getart", getArtProjects);

// get only one project given id
router.get("/getone", getOneProject);

// create art route
router.post("/createart", createArt);

// update like count
router.post("/updatelike", updateLikeCount);

// delete art route

module.exports = router;