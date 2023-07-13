const mongoose = require('mongoose')

const LocalSchema = mongoose.Schema({
    name: { type: String, required: true },
    location: { type: String, required: true},
    category: { type: String, required: true},
    comments: { type: String},
    stars: { type: Number, required: true}
})

module.exports = mongoose.model('LocalModel', LocalSchema)