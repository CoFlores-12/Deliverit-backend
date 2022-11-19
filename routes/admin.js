const categoriesSchema = require('../models/categories')
const storesSchema    = require('../models/stores')
const clientsSchema = require('../models/clients')
const ordersSchema = require('../models/orders')
const queries    = require('../modules/queries')
const express  =  require('express')
const app    = express()

//TODO: RUD clients
//clients request
app.get('/clients', (req, res) => {
    queries.getFromDB(clientsSchema, {})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
});
app.get('/client/:id', async (req, res) => {
    try {if(!req.params.id){throw new Error("oops")}
    }  catch (error) {
        res.status(400).send('Bad Request')
        return;
    }
    const client = await clientsSchema.find({"_id": req.params.id});
    res.send(client)
});
//clients request end

//TODO: CRUD stores
//stores request
app.get('/stores', (req, res) => {
    queries.getFromDB(storesSchema, {})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
});
//stores request end

//TODO: CRUD products
//products request
app.get('/products/:idStore', async (req, res) => {
    try {if(!req.params.idStore){throw new Error("oops")}
    }  catch (error) {
        res.status(400).send('Bad Request')
        return;
    }
    const store = await storesSchema.find({"_id": req.params.idStore});
    res.send(store[0].products)
});
//products request end

//TODO: CRUD categories
//categories request
app.get('/categories', (req, res) => {
    queries.getFromDB(categoriesSchema, {})
        .then(result => {
            res.send(result)
        })
        .catch(err => {
            res.status(500).send(err)
        })
});
//categories request end

//TODO: CRUD orders

module.exports = app