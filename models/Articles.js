const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const articleSchema = new Schema({
    
    titleEn: { type: String, required: true },
    titleEsp: { type: String},
    author: { type: String},
    date: { type: String},
    imageUrl1: { type: String},
    contentEn1: { type: String},
    contentEsp1: { type: String},
    template: { type: String},
    imageUrl2: { type: String},
    imageUrl3: { type: String},
    imageUrl4: { type: String},
    imageUrl5: { type: String},
    contentEn2: { type: String},
    contentEsp2: { type: String},
    contentEn3: { type: String},
    contentEsp3: { type: String},
    contentEn4: { type: String},
    contentEsp4: { type: String},
    contentEn5: { type: String},
    contentEsp5: { type: String},
    template: { type: String, required: true },

});

const Articles = mongoose.model("Article", articleSchema);

module.exports = Articles;