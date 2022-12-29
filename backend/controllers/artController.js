const mongoose = require("mongoose");
const Art = require("../models/ArtModel");

// get all projects from artist
const getAllProjects = async(req, res) => {
    const artist = req.query.param1;
    const artProjects = await Art.find({artist:artist}).sort({ year: -1, createdAt: -1});
    res.status(200).json(artProjects);
}

// get all art projects based on artist and category
const getArtistCategory = async(req, res) => {
    const artist = req.query.artist;
    const category = req.query.category;
    const artProjects = await Art.find({ artist: artist, category: category }).sort({ year: -1, createdAt: -1 });
    res.status(200).json(artProjects);
}

// get art projects based on year and category
const getArtProjects = async(req, res) => {
    const { artist, category, year } = req.query;
    if (!year && !category) { // get all art projects from artist
        console.log("year empty");
        const artProjects = await Art.find({artist:artist}).sort({createdAt: -1});
        console.log(artProjects);
        res.status(200).json(artProjects);
        return;
    }

    const artProjects = await Art.find({artist:artist, category:category, year:year}).sort({createdAt: -1});
    // const arrArtProjects = Object.keys(artProjects); // convert object to array

    res.status(200).json(artProjects);
}

// create art
const createArt = async (req, res) => {
    const { artist, title, category, year, artImage } = req.body;

    let emptyFields = [];
    if (!title) {
        emptyFields.push("title");
    }
    if (!category) {
        emptyFields.push("category");
    }
    if (!year) {
        emptyFields.push("year");
    }
    if (emptyFields.length > 0) {
        console.log("details are missing");
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    // add doc to db
    try {
        const art = await Art.create({ artist, title, category, year, artImage });

        res.status(200).json(art);
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}

const updateLikeCount = async (req, res) => {
    const { id, count } = req.body;
    const objId = mongoose.Types.ObjectId(id);
    let newCount;
    if (count === 0) {
        newCount = 0.5;
    } else {
        newCount = count;
    }
    try {
        const art = await Art.updatecount(objId, newCount);

        res.status(200).json({id, count});
    } catch (error) {
        console.log("Error:", objId, count);
        res.status(400).json({error: error.message});
    }
}

module.exports = { createArt, getArtProjects, getAllProjects, getArtistCategory, updateLikeCount };