const mongoose = require("mongoose");
const Art = require("../models/ArtModel");

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

module.exports = { createArt };