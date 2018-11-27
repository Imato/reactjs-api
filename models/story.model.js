const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let StorySchema = new Schema({
    text: {type: String, required: true},
    author: {type: String, required:true}
})

module.exports = mongoose.model('Story', StorySchema);

