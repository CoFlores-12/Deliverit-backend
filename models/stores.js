const mongoose  =  require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    logo: String,
    banner: String,
    location: {
        lat: Number,
        lng: Number
      },
    category: {
        id: mongoose.SchemaTypes.ObjectId,
        name: String
    },
    products: [
        {
            name: String,
            img: String,
            price: Number,
            description: String
        }
    ]
})

module.exports = mongoose.model('stores', schema)