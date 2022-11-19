const mongoose  =  require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    logo: String,
    banner: String,
    category: String
})

module.exports = mongoose.model('stores', schema)