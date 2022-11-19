const mongoose  =  require('mongoose')

const schema = new mongoose.Schema({
    name: String,
    logo: String,
    banner: String,
    category: String,
    products: [
        {
            img: String,
            price: Number,
            description: String
        }
    ]
})

module.exports = mongoose.model('stores', schema)