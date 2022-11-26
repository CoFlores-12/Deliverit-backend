const mongoose  =  require('mongoose')
const db        = 'Deliverit'
const port      = '27017'
const host      = 'localhost'

class Database {
    constructor(){
        this.connect();
    }

    connect(){
        mongoose.connect(`mongodb+srv://unah:is410@deliverit.elvsi2t.mongodb.net/?retryWrites=true&w=majority`)
            .then(() => {console.log('connected to Database in mongoDB Atlas')})
            .catch(err => {console.log(err)})
    }
}

module.exports = new Database();