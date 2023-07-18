const mongoose = require('mongoose')

const LocalSchema = mongoose.Schema({
    name: { type: String, required: true },
    location: { type: Object},
    category: { type: [String], default:[]},
    comments: { type: [String]},
    stars: { type: [Number], default: []},
    schedules: { type: Object, default:{}},
    ranking: { type: Number, default: 0}
})

module.exports = mongoose.model('LocalModel', LocalSchema)