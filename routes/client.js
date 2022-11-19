const express = require('express')
const bp      = require('body-parser')
const cookieP = require("cookie-parser")
const app     = express()
const cors       = require('cors')
const clientsSchema = require('../models/clients')
const ordersSchema  = require('../models/orders')
const queries = require('../modules/queries')


app.use(
    cors({
      credentials: true,
      origin: true,
    }),
);

app.use(bp.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieP())


app.post('/signin', async (req, res) => {
    try {
        if(!req.body.username || !req.body.email || !req.body.password){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(403).send('Unauthenticated User')
    }
    
    let user = await clientsSchema.find({"email": req.body.email});
    if (user.length > 0) {
        res.status(400).send('user already exists ')
        return
    }

    const data = {
        username: req.body.username,
        email: req.body.email,
        password: req.body.password
    }

    queries.insertInToDB(clientsSchema, data)
        .then(result => {
            res.send(result)
        })
        .catch(err => {res.status(500).send(err)})
})
app.post('/login', async (req, res) => {
    try {
        if(!req.body.email || !req.body.password){
            res.status(400).send('fill all the fields')
            return;
        }
    } catch (error) {
        res.status(403).send('Unauthenticated User')
    }

    let user = await clientsSchema.find({"email": req.body.email});
    if (user.length == 0) {
        res.status(400).send('user not exists ')
        return
    }

    if (user[0].password == req.body.password) {
        res.send(user[0]);
    }else{
        res.status(400).send("error credential")
    }

});

//TODO: Auth APIs
//TODO: get stores of a category
//TODO: get products of a store

app.get('/test', (req, res) => {
    try {req.cookies.id} catch (error) {
        res.status(403).send('Unauthenticated User')
    }
    res.send(req.cookies.id)
});

app.get('/orders', async (req, res) => {
    try {req.cookies.id} catch (error) {
        res.status(403).send('Unauthenticated User')
    }
    const orders = await ordersSchema.find({"client._id": req.cookies.id});
    res.send(JSON.stringify(orders))
});

app.get('/orders/:idOrder', async (req, res) => {
    try {req.params.idOrder} catch (error) {
        res.status(400).send('Bad Request')
    }
    const orders = await ordersSchema.find({"id": req.params.idOrder});
    res.send(JSON.stringify(orders))
});

app.post('/CreateOrder', async (req, res) => {
    try {req.cookies.id} catch (error) {
        res.status(403).send('Unauthenticated User')
    }
    const user = await clientsSchema.find({"_id": req.cookies.id});
    const ID = require("nodejs-unique-numeric-id-generator")
    const data = {
        id: ID.generate(new Date().toJSON()),
        status:  'Received',
        service: req.body.service,
        total: req.body.total,
        date: req.body.date,
        payment: req.body.payment,
        client:    {
            id: await user[0]._id,
            name: await user[0].username,
            email: await user[0].email
        },
        dealer:     {
            id: null,
            name: null,
            email: null,
            tel: null
        },
        products:  req.body.products,
        locations: req.body.locations
    }
    queries.insertInToDB(ordersSchema, data)
    res.send(JSON.stringify(data));
});

module.exports = app