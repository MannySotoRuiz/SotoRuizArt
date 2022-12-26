const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const artSchema = new Schema({
    artist: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        default: "Art project description"
    },
    artImage: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("Art", artSchema);