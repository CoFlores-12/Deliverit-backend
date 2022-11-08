const mongoose  =  require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    color: String,
    icon: String
})

module.exports = mongoose.model('categories', schema)