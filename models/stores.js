const mongoose  =  require('mongoose')
const ShortId   = require('mongoose-shortid')

const schema = new mongoose.Schema({
    _id: {
        type: ShortId,
        len: 5,
        base: 64,
        alphabet: undefined,
        retries: 4
    },
    name: String,
    logo: String,
    banner: String,
    description: String,
    category: String,
    location: {
        lat: String,
        long: String
    }
})

module.exports = mongoose.model('stores', schema)