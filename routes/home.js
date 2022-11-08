const express    =  require('express')
const app        = express()
const categories = require('../models/categories')
const stores     = require('../models/stores')
const queries    = require('../modules/queries')

//categories
app.get('/categories', (req, res) => {
    queries.getFromDB(categories, {})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err))
})

//stores
app.get('/stores', (req, res) => {
    queries.getFromDB(stores, {})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err))
})

app.get('/stores/:category', (req, res) => {
    queries.getFromDB(stores, {"category": req.params.category})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err))
})

app.get('/stores/:storeName', (req, res) => {
    queries.getFromDB(stores, {"name": req.params.storeName})
        .then(result => res.send(result))
        .catch(err => res.status(500).send(err))
})

module.exports = app