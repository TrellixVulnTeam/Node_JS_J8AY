const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const Course = new Schema({
    author: ObjectId,
    title: String,
    body: String,
    date: Date,
});