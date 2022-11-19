const mongoose  = require('mongoose')

const schema = new mongoose.Schema({
    id: String,
    status:    String,
    service: Number,
    total: Number,
    date: String,
    payment: {
        credit_card_number: String,
        credit_card_name: String
    },
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