const express    =  require('express')
const app        = express()
const cors       = require('cors')
const categorieschema = require('../models/categories')
const storeschema     = require('../models/stores')
const queries    = require('../modules/queries')

app.use(cors())

//categories
app.get('/categories', (req, res) => {
    queries.Read(categorieschema, {})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err))
})
app.get('/categories/:id', (req, res) => {
    queries.Read(categorieschema, {"_id": req.params.id})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err))
})

app.get('/stores/:idCategory', async (req, res) => {
    try {req.params.idCategory} catch (error) {
        res.status(400).send('Bad Request')
    }
    const stores = await storeschema
                    .find({"category.id": req.params.idCategory})
                    .select('name logo banner')
    res.send(stores)
});

app.get('/store/:idStore', (req, res) => {
    try {req.params.idStore} catch (error) {
        res.status(400).send('Bad Request')
    }
    queries.Read(storeschema, {"_id": req.params.idStore})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err))
});

module.exports = app