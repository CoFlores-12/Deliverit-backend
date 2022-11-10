const mongoose  = require('mongoose')
const ShortId   = require('mongoose-shortid')

const schema = new mongoose.Schema({
    _id: {
        type: ShortId,
        len: 5,
        base: 64,
        alphabet: undefined,
        retries: 4
    },
    status:    String,
    store:     String,
    client:    mongoose.SchemaTypes.ObjectId,
    dealer:    mongoose.SchemaTypes.ObjectId,
    products:  mongoose.SchemaTypes.Mixed,
    locations: mongoose.SchemaTypes.Mixed
})

module.exports = mongoose.model('orders', schema)