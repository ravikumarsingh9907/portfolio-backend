const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    platform: {
        type: Buffer,
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
        trim: true,
    },
    publishedOn: {
        type: String,
        required: true,
        trim: true,
    }
});

const Blogs = new mongoose.model("Blogs", BlogSchema);
module.exports = Blogs;