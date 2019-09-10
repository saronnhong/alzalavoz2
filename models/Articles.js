const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    
    title: { type: String, required: true },
    author: { type: String, required: true },
    date: { type: String, required: true },
    imageUrl: { type: String, required: true },
    content: { type: String, required: true }
});

const Articles = mongoose.model("Article", articleSchema);

module.exports = Articles;