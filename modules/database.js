const mongoose  =  require('mongoose')
const db        = 'Deliverit'
const port      = '27017'
const host      = 'localhost'

class Database {
    constructor(){
        this.connect();
    }

    connect(){
        mongoose.connect(`mongodb://${host}:${port}/${db}`)
            .then(() => {console.log('connected to Database')})
            .catch(err => {console.log(err)})
    }
}

module.exports = new Database();