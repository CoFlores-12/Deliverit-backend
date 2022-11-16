const mongoose  = require('mongoose')

const schema = new mongoose.Schema({
    status:    String,
    service: Number,
    total: Number,
    date: String,
    client:    {
        id: mongoose.SchemaTypes.ObjectId,
        name: String,
        email: String,
        tel: String
    },
    dealer:     {
        id: mongoose.SchemaTypes.ObjectId,
        name: String,
        email: String,
        tel: String
    },
    products:  mongoose.SchemaTypes.Mixed,
    locations: mongoose.SchemaTypes.Mixed
})

module.exports = mongoose.model('orders', schema)