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
    username: String,
    email: String,
    password: String
})

module.exports = mongoose.model('clients', schema)