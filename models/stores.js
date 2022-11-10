const mongoose  =  require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    logo: String,
    banner: String,
    category: String,
    location: {
        lat: String,
        long: String
    }
})

module.exports = mongoose.model('stores', schema)