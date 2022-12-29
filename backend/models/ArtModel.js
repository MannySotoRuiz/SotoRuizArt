const mongoose = require("mongoose");
const { json } = require("express"); 

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
    likecount: {
        type: Number,
        default: 0
    },
    artImage: { type: String }
}, { timestamps: true });

artSchema.statics.updatecount = async function(id, count) {
    // validation
    if (!id || !count) {
        throw Error("Missing id or count");
    }

    this.updateOne({_id: id}, {$set: { likecount:count }}, (err, doc) => {
        if (err) {
            console.log("Error:", id, count);
            throw Error("Error trying to update like count");
        }

        return json(doc);
    })
}

module.exports = mongoose.model("Art", artSchema);