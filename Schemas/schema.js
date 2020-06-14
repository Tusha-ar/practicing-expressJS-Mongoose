const mongoose = require('mongoose')

const BlogSchema = mongoose.Schema({
    Title :{
        type: String,
        require: true
    },
    Author: {
        type: String,
        require: true
    },
    date: {
        type: Date
    },
    Content: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('blog', BlogSchema)