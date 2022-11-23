const mongoose= require('mongoose');


//scheme
const schema = new mongoose.Schema({
    active:{
        type:Boolean,
        default:false
    },
    name:String,
    email:String,
    password:String,
    phoneNumber:String
})

module.exports=mongoose.model('Dealers',schema)